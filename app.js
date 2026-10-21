import http from 'node:http';

export function createServer() {
  return http.createServer((req, res) => {
    if (req.url === '/health') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: 'ok' }));
      return;
    }

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Hello World</title>
    <style>
      body { font-family: system-ui, sans-serif; display: grid; place-items: center; height: 100vh; margin: 0; background: #f5f5f5; }
      h1 { color: #333; }
    </style>
  </head>
  <body>
    <h1>Hello, World!</h1>
  </body>
</html>
`);
  });
}
