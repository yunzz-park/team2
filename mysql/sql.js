module.exports = {
  customerList: `select * from customers`,
  customerInsert: `insert into customers set ?`,
  customerUpdate: `update customers set? where id =?`,
  customerDelete: `delete from customers where id=?`,
  diaryList: `select * from diaries`,
  diaryInsert: `insert into diaries set ?`,
  diaryUpdate: `update diaries set? where id =? `,
  diaryDelete: `delete from diaries where id=?`,
  checkList: `select * from checks`,
  checkInsert: `insert into checks set ?`,
  checkUpdate: `update checks set? where id =?`,
  checkDelete: `delete from checks where id=?`,
};
