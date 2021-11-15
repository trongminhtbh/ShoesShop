let express = require("express");
let app = express();
let port = 3003;
let cors = require("cors");
app.use(cors());

app.get("/", function (req, res) {
  let partnerCode = "MOMO";
  let accessKey = "F8BBA842ECF85";
  let secretkey = "K951B6PE1waDMi640xX08PD3vg6EkVlz";
  let requestId = partnerCode + new Date().getTime();
  let orderId = requestId;
  let orderInfo = "pay with MoMo";
  let redirectUrl = "https://momo.vn";
  let ipnUrl = "https://momo.vn";
  let amount = "50000";
  let requestType = "captureWallet";
  let extraData = "email=nghia.tran.179@hcmut.edu.vn";
  let rawSignature =
    "accessKey=" +
    accessKey +
    "&amount=" +
    amount +
    "&extraData=" +
    extraData +
    "&ipnUrl=" +
    ipnUrl +
    "&orderId=" +
    orderId +
    "&orderInfo=" +
    orderInfo +
    "&partnerCode=" +
    partnerCode +
    "&redirectUrl=" +
    redirectUrl +
    "&requestId=" +
    requestId +
    "&requestType=" +
    requestType;
  //puts raw signature
  console.log("--------------------RAW SIGNATURE----------------");
  console.log(rawSignature);
  const crypto = require("crypto");
  let signature = crypto
    .createHmac("sha256", secretkey)
    .update(rawSignature)
    .digest("hex");

  console.log("--------------------SIGNATURE----------------");
  console.log(signature);
  const requestBody = JSON.stringify({
    partnerCode: partnerCode,
    accessKey: accessKey,
    requestId: requestId,
    amount: amount,
    orderId: orderId,
    orderInfo: orderInfo,
    redirectUrl: redirectUrl,
    ipnUrl: ipnUrl,
    extraData: extraData,
    requestType: requestType,
    signature: signature,
    lang: "en",
  });
  const https = require("https");
  const options = {
    hostname: "test-payment.momo.vn",
    port: 443,
    path: "/v2/gateway/api/create",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(requestBody),
    },
  };
  let response = "";
  const reqmomo = https.request(options, (resp) => {
    console.log(`Status: ${resp.statusCode}`);
    console.log(`Headers: ${JSON.stringify(resp.headers)}`);
    resp.setEncoding("utf8");
    resp.on("data", (body) => {
      console.log("Body: ");
      console.log(body);
      console.log("payUrl: ");
      console.log(JSON.parse(body).payUrl);
      response += JSON.parse(body).payUrl;
    });
    resp.on("end", () => {
      res.json(response);
    });
  });

  reqmomo.on("error", (e) => {
    console.log(`problem with request: ${e.message}`);
  });
  // write data to request body
  console.log("Sending....");
  reqmomo.write(requestBody);
  reqmomo.end();
});

app.get("/ghn-create", function (req, res) {
  let payment_type_id = 2;
  let note = "Tintest 123";
  let required_note = "KHONGCHOXEMHANG";
  let return_phone = "0332190444";
  let return_address = "39 NTT";
  let return_district_id = null;
  let return_ward_code = "";
  let client_order_code = "";
  let to_name = "TinTest124";
  let to_phone = "0987654321";
  let to_address = "72 Thành Thái, Phường 14, Quận 10, Hồ Chí Minh, Vietnam";
  let to_ward_code = "20308";
  let to_district_id = 1444;
  let cod_amount = 200000;
  let content = "Theo New York Times";
  let weight = 200;
  let length = 1;
  let width = 19;
  let height = 10;
  let pick_station_id = 1444;
  let deliver_station_id = null;
  let insurance_value = 1000000;
  let service_id = 53319;
  let service_type_id = 1;
  let order_value = 130000;
  let coupon = null;
  let items = [
    {
      name: "Áo Polo",
      code: "Polo123",
      quantity: 1,
      price: 200000,
      length: 12,
      width: 12,
      height: 12,
      category: {
        level1: "Áo",
      },
    },
  ];
  const createRequest = JSON.stringify({
    payment_type_id: payment_type_id,
    note: note,
    required_note: required_note,
    return_phone: return_phone,
    return_address: return_address,
    return_district_id: return_district_id,
    return_ward_code: return_ward_code,
    client_order_code: client_order_code,
    to_name: to_name,
    to_phone: to_phone,
    to_address: to_address,
    to_ward_code: to_ward_code,
    to_district_id: to_district_id,
    cod_amount: cod_amount,
    content: content,
    weight: weight,
    length: length,
    width: width,
    height: height,
    pick_station_id: pick_station_id,
    deliver_station_id: deliver_station_id,
    insurance_value: insurance_value,
    service_id: service_id,
    service_type_id: service_type_id,
    order_value: order_value,
    coupon: coupon,
    items: items,
  });
  console.log(createRequest);
  const https = require("https");
  const options = {
    hostname: "dev-online-gateway.ghn.vn",
    port: 443,
    path: "/shiip/public-api/v2/shipping-order/create",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "token": "ab5f765f-41d4-11ec-ac64-422c37c6de1b",
      "ShopId": 82940
    },
  };
  let response = "";
  const reqCreateOrder = https.request(options, (resp) => {
    console.log(`Status: ${resp.statusCode}`);
    console.log(`Headers: ${JSON.stringify(resp.headers)}`);
    resp.setEncoding("utf8");
    resp.on("data", (body) => {
      console.log("Body: ");
      console.log(body);
      console.log("payUrl: ");
      console.log(JSON.parse(body).data.order_code);
    });
    resp.on("end", () => {
    });
  });

  reqCreateOrder.on("error", (e) => {
    console.log(`problem with request: ${e.message}`);
  });
  // write data to request body
  console.log("Sending....");
  reqCreateOrder.write(createRequest);
  reqCreateOrder.end();
  
});

app.get("/get-order", function (req, res) {
  const reqBody = JSON.stringify({
    order_code: "Z8ZGX"
  });
  const https = require("https");
  const options = {
    hostname: "dev-online-gateway.ghn.vn",
    port: 443,
    path: "/shiip/public-api/v2/shipping-order/detail",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Token": "ab5f765f-41d4-11ec-ac64-422c37c6de1b",
    },
  };
  let response = {};
  const reqCreateGHN = https.request(options, (resp) => {
    console.log(`Status: ${resp.statusCode}`);
    console.log(`Headers: ${JSON.stringify(resp.headers)}`);
    resp.setEncoding("utf8");
    resp.on("data", (body) => {
      console.log("Body: ");
      console.log(body);
      console.log("payUrl: ");
      console.log(body);
    });
    resp.on("end", () => {
    });
  });

  reqCreateGHN.on("error", (e) => {
    console.log(`problem with request: ${e.message}`);
  });
  // write data to request body
  console.log("Sending....");
  reqCreateGHN.write(reqBody);
  reqCreateGHN.end();
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
