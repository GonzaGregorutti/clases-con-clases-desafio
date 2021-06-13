class Banda {
    members:string[]
    albums: object[]
    constructor(members:string[],albums:object[]){
        this.members=members
        this.albums=albums
    }
}

function main(){
    const unaBanda= new Banda(["gonza", "enri"], [])
    console.log(unaBanda.members)
    console.log(unaBanda.albums)
}
main()