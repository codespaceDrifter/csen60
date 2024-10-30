// Tags
const searchTags = [];

// Individual elements
let parentElement = null;
const tagLists = Array.from(document.querySelectorAll("article .tags"));

// Search Functions

/**
 * gets the list of tag= from the browser search bar and calls addSearchTerm for each of the tags on the html search bar section 
 */
function initializeSearch(newParentElement) {
  const params = new URLSearchParams(window.location.search);
  if (newParentElement === null) {
    console.error(
      "Cannot insert tags, parent element is null",
      params.getAll("tag")
    );
    return;
  }

  parentElement = newParentElement;
  for (const tag of params.getAll("tag")) {
    addSearchTerm(tag);
  }
}

/**
 * gets all articles with searched tags in a list. gets all articles into a list.
 * articles what are without searched tags are hidden and articles with searched tags are shown.
 */

function hideArticles() {
  if (searchTags.length === 0) {
    for (const article of document.querySelectorAll("article")) {
      article.classList.remove("hidden");
    }
    return;
  }

  const articlesWithTags = [];
  for (const tag of searchTags) {
    articlesWithTags.push(...findArticlesWithTag(tag));
  }

  /**
   * use querySelectorAll to select all articles
   * iterate over them in a for loop
   * check if articlesWithTags array does not include the current article being iterated over,
   * then add "hidden" to that article's classList
   * else, remove "hidden" from that article's classList
   */
  // write your code here
  const articles = document.querySelectorAll("article");
  for (const article of articles) {
    if (!articlesWithTags.includes(article)) {
      article.classList.add("hidden");
    } else {
      article.classList.remove("hidden");
    }
  }
}

/**
 * Creates a clickable tag button for a given search term (text). When clicked,
 * the button will remove the corresponding tag from both the DOM and the searchTags array.
 * This function also calls hideArticles to update the articles displayed after removal.
 */
function createTag(text) {
  /**
   * create a new element called button
   * add the class "tag" to its classList
   * set the button's textContent property to text (the passed in argument)
   */
  // write your code here
  const button = document.createElement("button");
  button.classList.add("tag");
  button.textContent = text;

  function remove() {
    button.remove();
    const index = searchTags.indexOf(text);
    if (index !== -1) {
      searchTags.splice(index, 1);
    }

    hideArticles();
  }

  /**
   * add a click event listener to the button, and set the listener to the remove function.
   * return the button element 
   */
  // write your code here
  button.addEventListener("click", remove);
  return button;
}

/**
 * parameter is the searched tag. it loops through all the article's taglists and then loops through all the tags of that taglist
 *  if the tag matches the searched tag the article is addted to articles array. which is returned after the loops
 */

function findArticlesWithTag(phrase) {
  const articles = [];
  const sanitizedPhrase = phrase.toLowerCase().trim();
  for (const tl of tagLists) {
    const tags = Array.from(tl.querySelectorAll("li"));
    for (const tag of tags) {
      if (tag.textContent.toLowerCase().trim() === sanitizedPhrase) {
        articles.push(tl.parentElement);
        break;
      }
    }
  }

  return articles;
}


/**
 * calls the createTag function to create a button using given text  
 *  adds the button to the search bar and calls hideArticles to re calculate which articles are meant to be shown
 */

function addSearchTerm(text) {
  parentElement.appendChild(createTag(text));
  searchTags.push(text);
  hideArticles();
}

// Handlers
/**
 * A event handler on the search bar. if the key pressed is enter, it calls add search item with the input in the search bar and clears the search bar
 */

function onSearch(event) {
  const input = event.currentTarget;
  /**
   * If event.key equals "Enter":
   * call addSearchTerm and pass the input element's value
   * set input value to an empty string
   */
  // write your code here
  if (event.key === "Enter") {
    addSearchTerm(input.value);
    input.value = "";
  }
}

// Main function
/**
 * adds the tag buttons in the url
 * adds the event "enter" key listener to the search bar
 */

function main() {
  initializeSearch(document.querySelector("#searched-tags"));

  document
    .querySelector("input[type=search]")
    .addEventListener("keypress", onSearch);
}

// Execute main function
main();

/**
 * Order of execution for each event:
 * Pressing Enter: onSearch --> addSearchTerm --> hideArticles --> findArticlesWithTag
 * Clicking to Remove a Tag: remove --> hideArticles --> findArticlesWithTag
 * Loading the Page: initializeSearch --> addSearchTerm --> hideArticles --> addEventListener
 */