console.log("[WhatsApp-preview] init");

function test() {
  console.log("[test] test");
}

function copyText() {
  console.clear();
  var input = document.getElementById("input");
  var output = document.getElementById("output");

  input.style.height = 'auto';
  input.style.height = input.scrollHeight + 'px';

  output.style.display = "block";

  console.log("[copyText] input", input.value);
  // console.log("[copyText] (BEFORE) output", output.innerHTML);

  output.innerHTML = input.value;

  let firstAsterisk = undefined;
  let lastAsterisk = undefined;

  console.log("[copyText] - - - - - - - - - - - - - -");
  for (const i in input.value) {
    const char = input.value[i];
    console.log("[copyText] char", char);

    if (char == "*") {
      if (firstAsterisk == undefined) {
        firstAsterisk = i;
        console.log("[copyText] firstAsterisk", firstAsterisk);
      } else {
        lastAsterisk = i;
        console.log("[copyText] lastAsterisk", lastAsterisk);
      }
    }
  }
  console.log("[copyText] - - - - - - - - - - - - - -");

  // console.log("[copyText] (AFTER) output", output.innerHTML);
  console.log("[copyText] output", output.innerHTML);
  console.log("[copyText] (BEFORE) output", output.innerText);

  output.innerText = input.value;
  console.log("[copyText] (AFTER) output", output.innerText);
}
