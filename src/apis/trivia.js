import axios from 'axios';

export default axios.create({
  baseURL:'https://opentdb.com/api.php?amount=30&category=9&type=multiple'
});
