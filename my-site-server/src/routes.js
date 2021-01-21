const { Router } = require('express');
const { getCommon, getContacts } = require('./__mocks__');

const router = Router();

function getStoragePath (req) {
  return `http://${req.headers.host}/storage`;
}

router.get('/common', (req, res) => {
  const storage = getStoragePath(req);

  res.send(getCommon(storage));
});

router.get('/links', (req, res) => {
  const links = getContacts();
  res.send(links);
})

module.exports = router;
