const express = require("express");
require("dotenv").config({ path: "mysql/.env" }); // mysql 폴더에 있는 .env 파일을 찾아서 환경 변수를 설정

const mysql = require("./mysql");
const app = express();

app.use(
  express.json({
    limit: "50mb",
  })
);

app.listen(3000, () => {
  console.log("Server started. port 3000");
});

// 회원 정보 조회 라우터
app.get("/api/customers", async (req, res) => {
  const customers = await mysql.query("customerList");
  console.log(customers);
  res.send(customers);
});

// 회원 정보 추가 라우터
app.post("/api/customer/insert", async (req, res) => {
  console.log(req.body);
  const result = await mysql.query("customerInsert", req.body.param);
  res.end(result);
});

// 회원 정보 수정 라우터
app.put("/api/customer/update", async (req, res) => {
  const result = await mysql.query("customerUpdate", req.body.param);
  res.send(result); // 결과를 클라이언트로 보냄
});

// 회원 정보 삭제 라우터
app.delete("/api/customer/delete/:id", async (req, res) => {
  const { id } = req.params; // 라우트 경로의 :id에 매핑되는 값
  const result = await mysql.query("customerDelete", id);
  res.send(result); // 결과를 클라이언트로 보냄
});

// 다이어리 정보 조회 라우터
app.get("/api/diaries", async (req, res) => {
  const diaries = await mysql.query("diaryList");
  console.log(diaries);
  res.send(diaries);
});

// 다이어리 정보 추가 라우터
app.post("/api/diaries/insert", async (req, res) => {
  console.log(req.body);
  const result = await mysql.query("diaryInsert", req.body.param);
  res.end(result);
});

// 다이어리 정보 수정 라우터
app.put("/api/diaries/update", async (req, res) => {
  const result = await mysql.query("diaryUpdate", req.body.param);
  res.send(result); // 결과를 클라이언트로 보냄
});

// 다이어리 정보 삭제 라우터
app.delete("/api/diaries/delete/:id", async (req, res) => {
  const { id } = req.params; // 라우트 경로의 :id에 매핑되는 값
  const result = await mysql.query("diaryDelete", id);
  res.send(result); // 결과를 클라이언트로 보냄
});

// 체크리스트 정보 조회 라우터
app.get("/api/checks", async (req, res) => {
  const checks = await mysql.query("checkList");
  console.log(checks);
  res.send(checks);
});

// 체크리스트 정보 추가 라우터
app.post("/api/checks/insert", async (req, res) => {
  console.log(req.body);
  const result = await mysql.query("checkInsert", req.body.param);
  res.end(result);
});

// 체크리스트 정보 수정 라우터
app.put("/api/checks/update", async (req, res) => {
  const result = await mysql.query("checkUpdate", req.body.param);
  res.send(result); // 결과를 클라이언트로 보냄
});

// 체크리스트 정보 삭제 라우터
app.delete("/api/checks/delete/:id", async (req, res) => {
  const { id } = req.params; // 라우트 경로의 :id에 매핑되는 값
  const result = await mysql.query("checkDelete", id);
  res.send(result); // 결과를 클라이언트로 보냄
});
