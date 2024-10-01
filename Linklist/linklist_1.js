class node {
    constructor(data){
        this.data = data,
        this.next = null
    }
}

class LinkList {
    constructor(head = null){
        this.head = head
    }
}

const node1 = new node({id:"35353", data: "tgte4t64tge4"})
const node2 = new node({id:"64646", data: "ghreij4yj66"})
const node3 = new node({id:"75757", data: "3yer474575475"})
const node4 = new node({id:"57744", data: "7uttu55u4t4u5"})
const node5 = new node({id:"78685", data: "thdgtryrtytr"})
const mylist = new LinkList(node1)
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = null

console.log(mylist)
