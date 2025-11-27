$("#convertButton").click(function () {
  const amount = $("#amount").val();
  const from = $("#fromCurrency").val();
  const to = $("#toCurrency").val();
  const resultDiv = $("#result");

  if (!amount) {
    resultDiv.text("nasgor goreng");
    return;
  }

  $.ajax({
    url: `https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest?base=${from}`,
    method: "GET",
    headers: {
      "x-rapidapi-key": "1cf6c94ca4msh39665c60734fbbdp1004a1jsnc3e3ae2d7f6d",
      "x-rapidapi-host":
        "currency-conversion-and-exchange-rates.p.rapidapi.com",
    },
    success: function (response) {
      const rate = response.rates[to];

      if (rate) {
        const finalAmount = amount * rate;
        resultDiv.text(
          `${amount} ${from} = ${finalAmount.toLocaleString()} ${to}`
        );
      } else {
        resultDiv.text("huhuhaha");
      }
    },
    error: function () {
      resultDiv.text("mampus error");
    },
  });
});