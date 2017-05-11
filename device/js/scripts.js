var feedback_link = document.querySelector(".modal-contact-us");
var feedback_popup = document.querySelector(".modal-content-feedback");
var feedback_close = document.querySelector(".modal-content-feedback .modal-content-close");
var feedback_form_name = feedback_popup.querySelector("[name=name]");

var map_link = document.querySelector(".modal-map");
var map_popup = document.querySelector(".modal-content-map");
var map_close = document.querySelector(".modal-content-map .modal-content-close");

feedback_link.addEventListener("click", function (evt) {
	evt.preventDefault();
	feedback_popup.classList.add("modal-content-show");
	feedback_form_name.focus();
});

feedback_close.addEventListener("click", function (evt) {
	evt.preventDefault();
	feedback_popup.classList.remove("modal-content-show");
})

map_link.addEventListener("click", function (evt) {
	evt.preventDefault();
	map_popup.classList.add("modal-content-show");
});

map_close.addEventListener("click", function (evt) {
	evt.preventDefault();
	map_popup.classList.remove("modal-content-show");
})
