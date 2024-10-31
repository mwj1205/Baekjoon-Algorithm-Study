function solution(tickets) {
  const graph = {};
  for (const [start, end] of tickets) {
    if (!graph[start]) graph[start] = [];
    graph[start].push(end);
  }
  for (const key in graph) {
    graph[key].sort();
  }

  const answer = [];

  function dfs(current) {
    while (graph[current] && graph[current].length > 0) {
      const next = graph[current].shift();
      dfs(next);
    }
    answer.push(current);
    console.log('answer: ', answer);
  }

  dfs('ICN');

  return answer.reverse();
}