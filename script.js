"use strict";
window.onload = function () {
 document.querySelector(".pre").play();
};
const themes = [
 {
  background: "#1A1A2E",
  color: "#FFFFFF",
  primaryColor: "#0F3460",
  img: "./img/1817648.svg",
  audio: "./audio/1.mp3",
 },
 {
  background: "#461220",
  color: "#FFFFFF",
  primaryColor: "#E94560",
  img: "./img/154911.svg",
  audio: "./audio/2.mp3",
 },
 {
  background: "#192A51",
  color: "beige",
  primaryColor: "#967AA1",
  img: "./img/312263.svg",
  audio: "./audio/3.mp3",
 },
 {
  background: "#66347F",
  color: "#fff",
  primaryColor: "#F4845F",
  img: "./img/1327960.svg",
  audio: "./audio/4.mp3",
 },
 {
  background: "#9E4784",
  color: "#EEE9DA",
  primaryColor: "#642B36",
  img: "./img/2099044.svg",
  audio: "./audio/5.mp3",
 },
 {
  background: "#231F20",
  color: "#FFF",
  primaryColor: "#BB4430",
  img: "./img/2099160.svg",
  audio: "./audio/6.mp3",
 },
];

const setTheme = (theme) => {
 const root = document.querySelector(":root");
 const imgs = document.querySelector(".illustration");
 const aud = document.querySelector(".audio");
 root.style.setProperty("--background", theme.background);
 root.style.setProperty("--color", theme.color);
 root.style.setProperty("--primary-color", theme.primaryColor);
 imgs.src = `${theme.img}`;
 aud.src = `${theme.audio}`;
};

const displayThemeButtons = () => {
 const btnContainer = document.querySelector(".theme-btn-container");
 themes.forEach((theme) => {
  const div = document.createElement("div");
  div.className = "theme-btn";
  div.style.cssText = `background: ${theme.background}; width: 100%; height: 40px`;
  btnContainer.appendChild(div);
  div.addEventListener("click", () => setTheme(theme));
 });
};

displayThemeButtons();
