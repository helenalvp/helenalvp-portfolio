import cartCheckerTitleCard from "../../assets/img/project-images/cart-checker/title.png";
import cartChecker1 from "../../assets/img/project-images/cart-checker/screenshot-1.PNG";
import cartChecker2 from "../../assets/img/project-images/cart-checker/screenshot-2.PNG";
import cartChecker3 from "../../assets/img/project-images/cart-checker/screenshot-3.PNG";
import tacoCatTitleCard from "../../assets/img/project-images/taco-cat/title.png";
import tacoCat1 from "../../assets/img/project-images/taco-cat/screenshot-1.PNG";
import tacoCat2 from "../../assets/img/project-images/taco-cat/screenshot-2.PNG";
import tacoCat3 from "../../assets/img/project-images/taco-cat/screenshot-3.PNG";
import hundredNextTitleCard from "../../assets/img/project-images/hundred-next/title.png";
import hundredNext1 from "../../assets/img/project-images/hundred-next/screenshot-1.PNG";
import hundredNext2 from "../../assets/img/project-images/hundred-next/screenshot-2.PNG";
import hundredNext3 from "../../assets/img/project-images/hundred-next/screenshot-3.PNG";
import fizzBuzzTitleCard from "../../assets/img/project-images/fizz-buzz/title.png";
import fizzBuzz1 from "../../assets/img/project-images/fizz-buzz/screenshot-1.PNG";
import fizzBuzz2 from "../../assets/img/project-images/fizz-buzz/screenshot-2.PNG";
import fizzBuzz3 from "../../assets/img/project-images/fizz-buzz/screenshot-3.PNG";

var cartChecker = {
  name: "Cart Checker",
  cardImage: cartCheckerTitleCard,
  img: [cartChecker1, cartChecker2, cartChecker3],
  type: "Project",
  description:
    "This is designed to be a companion for your shopping trips. Just have it out while you're shopping, adding every item and its price to your cart. While you shop, you can figure out exactly how much you have in your cart and how much you'll be paying in taxes before you hit the register!",
  shortDescription: "A Grocery Shopping List App",
  link: "https://helenalvp-cart-checker.netlify.app/",
  expanded: "",
};
var tacoCat = {
  name: "Taco Cat",
  cardImage: tacoCatTitleCard,
  img: [tacoCat1, tacoCat2, tacoCat3],
  type: "Code Challenge",
  description:
    "TacoCat is a palindrome. A Palindrome is a word, phrase, or sequence that reads the same backwards as forward. A program that checks if the phrase entered is a palindrome or not.",
  shortDescription: "A Palindrome Excercise",
  link: "https://helenalvp-tacocat.netlify.app/",
  expanded: "",
};
var hundredNext = {
  name: "Hundred Next",
  cardImage: hundredNextTitleCard,
  img: [hundredNext1, hundredNext2, hundredNext3],
  type: "Code Challenge",
  description:
    "A javascript coding excercise using loops. A program that displays the numbers from 0 to 100, and displays the even numbers BOLD",
  shortDescription: "A Loop Excercise",
  link: "https://helenalvp-hundrednext.netlify.app/",
  expanded: "",
};
var fizzBuzz = {
  name: "Fizz Buzz",
  cardImage: fizzBuzzTitleCard,
  img: [fizzBuzz1, fizzBuzz2, fizzBuzz3],
  type: "Code Challenge",
  description:
    "A javascript coding project exercise using loops. A program that prints the numbers from 1 to 100 and for multiples of `3` display `Fizz` instead of the number and for the mutliples of `5` display `Buzz`. If a multiple of both, it displays `FizzBuzz`",
  shortDescription: "A FizzBuzz Challenge",
  link: "https://helenalvp-fizzbuzz.netlify.app/",
  expanded: "",
};

var projectList = [cartChecker, tacoCat, hundredNext, fizzBuzz];

export default projectList;
