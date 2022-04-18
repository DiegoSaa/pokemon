import users from '../../data/users.json';

export default function handler(req, res) {
  if (req.method === 'POST' && users.find(user => user.email === req.body.email && user.password === req.body.password)) {
    res.status(200).send('Login successful');
  } else {
    res.status(401).send('Login failed');
  }
}