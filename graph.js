// Define a class Graph as a constructor
export default class Graph {
    // Designate that this is an undirected graph
    constructor(isDirected = false) {
        // Define a Dictionary, or JavaScript object, to store the list of adjacent vertices
        this.vertices = {};
        // Define a placeholder for whether the graph is directed based on our input
        this.isDirected = isDirected;
    }
    // Define the addVertex method to populate this.vertices
    addVertex(newVertex) {
        this.vertices[newVertex] = {
            // Define each new vertex as having the ability to be assigned edges
            edges: {}
        };
    }
    // Define the hasVertex method to check if a given vertex exists in the graph
    hasVertex(vertex) {
        // Double bang converts the lookup into a boolean return value
        return !!this.vertices[vertex];
    }
    // Define the hasEdge method to check if two vertices have an edge
    hasEdge(vertexFrom, vertexTo) {
        // Check to see if the vertices passed exist
        if (this.hasVertex(vertexFrom) && this.hasVertex(vertexTo)) {
            // If they do, check to see if the graph is directed - for my tests, I'm setting the graph to be undirected
            if (this.isDirected) {
                // If it is, only check for an edge on the start vertex
                return !!this.vertices[vertexFrom].edges[vertexTo];
            }
            // Otherwise, return true if the edge is defined on both vertices
            else {
                // Return the check for an edge on the end vertex, since both start and end vertices will have been assigned edges if graph is undirected
                return !!this.vertices[vertexTo].edges[vertexFrom];
                
            }
        }
        // If they don't exist
        else {
            throw new Error("One or both of these vertices do not exist in the graph");
        }
    }
    // Define the addEdge method to populate the edges of two vertices
    addEdge(vertexFrom, vertexTo) {
        // Check to see if the vertices passed exist
        if (this.hasVertex(vertexFrom) && this.hasVertex(vertexTo)) {
            // If they exist, check to see if they already have an edge defined
            if (this.hasEdge(vertexFrom, vertexTo)) {
                // If they already have an edge, throw an error
                throw new Error("This edge has already been defined");
            }
            // Otherwise...
            else {
                // Check to see if the graph is directed - for my tests, I'm setting the graph to be undirected
                if (this.isDirected) {
                    // If it is, then add the edge only to start vertex.
                    this.vertices[vertexFrom].edges[vertexTo] = true;
                }
                // Otherwise, the graph is undirected, so add the edge to both vertices
                else {
                    // This sets a key with the name of the value of vertexTo onto the edges object of vertexFrom,
                    // and sets a key with the name of the value of vertexFrom onto the edges object of vertexTo,
                    // equal to 'true' so both vertices "know" they have an edge
                    // Ex: if my house (a vertex) is connected to the grocery store (a vertex) by a street,
                    // then my house and the grocery store have an edge
                    // myHouse: { edges: {groceryStore: true} } and groceryStore: { edges: {myHouse: true} }
                    this.vertices[vertexFrom].edges[vertexTo] =
                    this.vertices[vertexTo].edges[vertexFrom] = true;
                }
            }
        }
        // Otherwise, throw an error because one or both of the vertices do not exist in the graph
        else {
            throw new Error("One or both of these vertices do not exist in the graph");
        }
    }
    // Define the removeEdge method to remove the edges of two vertices
    removeEdge(vertexFrom, vertexTo) {
        // Check to see if the vertices exist, and if they have an edge
        if (this.hasVertex(vertexFrom) && this.hasVertex(vertexTo) && this.hasEdge(vertexFrom, vertexTo)) {
            // If they exist and have an edge, check to see if the graph is directed
            if (this.isDirected) {
                // If it is directed, remove the edge from the start vertex
                delete this.vertices[vertexFrom].edges[vertexTo];
            }
            // Otherwise, remove the edges from both vertices
            else {
                delete this.vertices[vertexFrom].edges[vertexTo];
                delete this.vertices[vertexTo].edges[vertexFrom];
            }
        }
        // If the vertices do not exist, or there is no edge between the vertices, throw an error
        else {
            throw new Error("No edge exists between those vertices");
        }
    }
    // Define the removeVertex method to remove a given vertex and its edges
    removeVertex(vertex) {
        // For each edge defined in the passed vertex
        for (let neighbor in this.vertices[vertex].edges) {
            // Unreference the passed vertex
            this.removeEdge(vertex, neighbor);
        }
        // Finally, delete the vertex from the graph
        delete this.vertices[vertex];
    }
}