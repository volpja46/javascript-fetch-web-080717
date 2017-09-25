fetch('https://api.github.com/volpja46/repos').
  then(res => res.json()).
  then(json => console.log(json))


  const token = '175819156faa2dc037497c20c553211df84e3073'
  fetch('https://api.github.com/volpja46/repos', {
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => console.log(json));
