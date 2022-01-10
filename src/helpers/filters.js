export function bogintific(n) {
  // reference: https://stackoverflow.com/a/55987414
  if (n == 0) return 0;

  let result = 0;
  let suffix = "";
  if (n < 1e-3) {
    let parts = n.toExponential().split("e");
    result = (parseFloat(parts[0]) / 10.0).toFixed(3);
    suffix = "&nbsp;<b>e" + (parseInt(parts[1]) + 1) + "</b>";
  } else if (n < 1e3) result = n.toLocaleString("en-US");
  else if (n >= 1e3 && n < 1e6) result = parseInt(n).toLocaleString("en-US");
  else if (n >= 1e6 && n < 1e9) {
    result = (n / 1e6).toLocaleString("en-US");
    suffix = "M";
  } else if (n >= 1e9 && n < 1e12) {
    result = (n / 1e9).toLocaleString("en-US");
    suffix = "B";
  } else if (n >= 1e12) {
    result = (n / 1e12).toLocaleString("en-US");
    suffix = "T";
  }
  return result + suffix;
}

export function minPrecision(value, precision) {
  if (!value) {
    return value;
  }
  value = parseFloat(value).toFixed(18);

  let trimmed = "";
  let inDecimals = false;
  let pastLeading = false;
  let precisionCounter = 0;

  for (let i = 0; i < value.length; i++) {
    if (value[i] === ".") {
      if (precisionCounter >= precision) {
        break;
      } else {
        inDecimals = true;
      }
    } else {
      if (!pastLeading && value[i] !== "0") {
        pastLeading = true;
      }

      if (pastLeading) {
        precisionCounter++;
      }
    }
    trimmed += value[i];

    if (precisionCounter === precision && inDecimals) {
      break;
    }
  }

  return trimmed;
}