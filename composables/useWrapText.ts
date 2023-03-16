import $ from "jquery";

export const useWrapText = async () => {
  $(".job-part").each(function (index, item) {
    var characters = $(this).text().split("");
    characters = characters.filter(
      (character) => character != " " && character != "\n"
    );
    $(item).empty();

    $.each(characters, function (i, el) {
      $(item).append(
        '<div class="inline-block letter bg-gradient-to-r bg-clip-text text-transparent from-indigo-500 via-purple-500 to-indigo-500 animate-text">' +
          el +
          "</div>"
      );
    });
  });

  return;
};
