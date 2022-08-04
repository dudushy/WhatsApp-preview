console.log("[WhatsApp-preview] init");

function test() {
  console.log("[test] test");
}

function copyText() {
  var input = document.getElementById("input");
  var output = document.getElementById("output");

  console.log("[copyText] input", input.value);
  console.log("[copyText] (BEFORE) output", output.innerHTML);

  output.innerHTML = input.value;
  console.log("[copyText] (AFTER) output", output.innerHTML);
}
