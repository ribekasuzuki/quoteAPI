const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 5501;

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})

app.get('/', (req, res) => {
    res.send('Server is running!');
  });

app.get('/api/quotes/random', (req, res, next) => {
  let randomElement = getRandomElement(quotes);
  console.log(randomElement)
  res.send({ quote: randomElement });
})

app.get('/api/quotes', (req, res, next) => {
  let queryArguments = req.query;
  let arrayPerson = []
  if (queryArguments.person) {
    for(let argument in quotes) {
      if (quotes[argument].person === queryArguments.person) {
        arrayPerson.push(quotes[argument])
      } else {
        ({ quotes: arrayPerson })
      }
      }
      res.send({ quotes: arrayPerson })
    } else {
      res.send({ quotes: quotes });
    }
    }
  )

  app.post('/api/quotes', (req, res, next) => {
    let queryArguments = req.query;
    if (queryArguments.person && queryArguments.quote) {
      quotes.push(queryArguments)
      console.log(quotes)
      res.status(201).send({ quote: queryArguments }) 
    } else {
      res.status(404).send()
    }
  }) 

