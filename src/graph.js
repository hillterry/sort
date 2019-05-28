function Graph(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    this.marked = [];
    for (let i = 0; i < this.vertices; i++) {
        this.adj[i] = [];
        this.marked[i] = false;
    }
    this.addEdge = addEdge;
    this.dfs = dfs;
    this.bfs = bfs;
    this.pathTo = pathTo;
    this.hasPathTo = hasPathTo;
    this.edgeTo = [];
}
function addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}
function dfs(v) {
    this.marked[v] = true;
    if (this.adj[v] !== undefined) {
        console.log('visted' + v);
    }
    this.adj[v].map(element => {
        if (!this.marked[element]) {
            this.dfs(element);
        }
    });

}
function bfs(v) {
    let queue = [];
    this.marked[v] = true
    queue.push(v);
    while (queue.length > 0) {
        let current = queue.shift();
        if (current !== undefined) {
            console.log('visted' + v)
        }
        this.adj[current].map(element => {
            if (!this.marked[element]) {
                this.edgeTo[element] = current;
                queue.push(element);
                this.marked[element] = true
            }
        })
    }
}
function pathTo(v) {
    var source = 0;
    if (!this.hasPathTo(v)) {
        return null;
    }
    var path = [];
    for (var i = v; i !== source; i = this.edgeTo[i]) {
        path.push(i)
    }
    path.push(source);
    return path;
}
function hasPathTo(v) {
    return this.marked[v]
}
let testG = new Graph(5);
testG.addEdge(0,1);
testG.addEdge(0,2);
testG.addEdge(1,3);
testG.addEdge(2,4);
testG.bfs(0);
console.log(testG.pathTo(4));