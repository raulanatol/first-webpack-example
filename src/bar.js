export default function bar() {
  console.log('Hello from Webpack');
}

export function defaultParameters(height, color = '#FF0000') {
  console.log('Default parameters', height, color);
}
