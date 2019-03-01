$("#addItemButton").on("click", (event) => {
	event.preventDefault();
	$addItemTextfield = $("#addItemTextfield")
	$(".shoppingList").append(`        <li class="shoppingListItem">
          <div>${$addItemTextfield.val()}</div>
          <button class="checkButton">check</button>
          <button class="deleteButton">delete</button>
        </li>`);
	$addItemTextfield.val("");
});

$(".shoppingList").on("click", ".checkButton", function (event) {
	event.preventDefault();
	$(this).prev().toggleClass("checkedItem");
});

$(".shoppingList").on("click", ".deleteButton", function (event) {
	event.preventDefault();
	$(this).parent().remove();
});
