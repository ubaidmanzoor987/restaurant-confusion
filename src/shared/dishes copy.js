export const DISHES = [
    {
        id: 0,
        name:'Uthappizza',
        image: 'assets/images/uthappizza.png',
        category: 'mains',
        label:'Hot',
        price:'4.99',
        description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
        comment_man1:"--John lemon, Oct 17,2012",
        comment1:"Imagine all the eatables,living in conFusion!",
        comment_man2:"--Paul Mcvites, Sep 06,2014",
        comment2:" Send anyone to heaven, I wish i could get  my mother-in-law to eat it!",
        comment_man3:"--Michael Jaikesin , Feb 14, 2015",
        comment3:"Eat it, just eat it!",
        comment_man4:"--Ringo Starry, Dec 03,2013",
        comment4:"Ultimate,Reaching for the stars!",
        comment_man5:"--UbaidUllah Manzoor Aug 01,2019",
        comment5:"i love to work with react",
    },
    {
        id: 1,
        name:'Zucchipakoda',
        image: 'assets/images/zucchipakoda.png',
        category: 'appetizer',
        label:'Hot',
        price:'1.99',
        description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
        comment_man1:"--John lemon, Oct 17,2012",
        comment1:"Imagine all the eatables,living in conFusion!",
        comment_man2:"--Paul Mcvites, Sep 06,2014",
        comment2:" Send anyone to heaven, I wish i could get  my mother-in-law to eat it!",
        comment_man3:"--Michael Jaikesin , Feb 14, 2015",
        comment3:"Eat it, just eat it!",
        comment_man4:"--Ringo Starry, Dec 03,2013",
        comment4:"Ultimate,Reaching for the stars!",
        comment_man5:"--UbaidUllah Manzoor Aug 01,2019",
        comment5:"i love to work with react",                        
    },
    {
        id: 2,
        name:'Vadonut',
        image: 'assets/images/vadonut.png',
        category: 'appetizer',
        label:'New',
        price:'1.99',
        description:'A quintessential ConFusion experience, is it a vada or is it a donut?',
        comment_man1:"--John lemon, Oct 17,2012",
        comment1:"Imagine all the eatables,living in conFusion!",
        comment_man2:"--Paul Mcvites, Sep 06,2014",
        comment2:" Send anyone to heaven, I wish i could get  my mother-in-law to eat it!",
        comment_man3:"--Michael Jaikesin , Feb 14, 2015",
        comment3:"Eat it, just eat it!",
        comment_man4:"--Ringo Starry, Dec 03,2013",
        comment4:"Ultimate,Reaching for the stars!", 
        comment_man5:"--UbaidUllah Manzoor Aug 01,2019",
        comment5:"i love to work with react",                       
    },
    {
        id: 3,
        name:'ElaiCheese Cake',
        image: 'assets/images/elaicheesecake.png',
        category: 'dessert',
        label:'Something',
        price:'2.99',
        description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
        comment_man1:"--John lemon, Oct 17,2012",
        comment1:"Imagine all the eatables,living in conFusion!",
        comment_man2:"--Paul Mcvites, Sep 06,2014",
        comment2:" Send anyone to heaven, I wish i could get  my mother-in-law to eat it!",
        comment_man3:"--Michael Jaikesin , Feb 14, 2015",
        comment3:"Eat it, just eat it!",
        comment_man4:"--Ringo Starry, Dec 03,2013",
        comment4:"Ultimate,Reaching for the stars!",
        comment_man5:"--UbaidUllah Manzoor Aug 01,2019",
        comment5:"i love to work with react",                        
    },
    {
        id:4,
        name:'Ubaid Ullah Manzoor',
        image:'assets/images/ubaid1.jpg',
        category:'SoftWare Engineer',
        label:'Something',
        degree:'BSCS',
        description:'Doing BSCS in NCBAE',
        comment_man1:"--John lemon, Oct 17,2012",
        comment1:"Imagine all the eatables,living in conFusion!",
        comment_man2:"--Paul Mcvites, Sep 06,2014",
        comment2:" Send anyone to heaven, I wish i could get  my mother-in-law to eat it!",
        comment_man3:"--Michael Jaikesin , Feb 14, 2015",
        comment3:"Eat it, just eat it!",
        comment_man4:"--Ringo Starry, Dec 03,2013",
        comment4:"Ultimate,Reaching for the stars!",
        comment_man5:"--UbaidUllah Manzoor Aug 01,2019",
        comment5:"i love to work with react",
    },
    {
        id:5,
        name:'Anaya Nadeem',
        image:'assets/images/anaya.jpg',
        category:'Child',
        label:'',
        degree:'Nursery',
        description:'Cute Child studying nursery',
        comment_man1:"--John lemon, Oct 17,2012",
        comment1:"Nice Baby!",
        comment_man2:"--Paul Mcvites, Sep 06,2014",
        comment2:"Cute & nice!!",
        comment_man3:"--Michael Jaikesin , Feb 14, 2015",
        comment3:"Love It!!",
        comment_man4:"--Ringo Starry, Dec 03,2013",
        comment4:"Ultimate,Reaching for the stars!",
        comment_man5:"--UbaidUllah Manzoor Aug 01,2019",
        comment5:"Neautiful",
    }
]
<Menu dishes={this.state.dishes} onClick={ (dishid) => this.OnDishSelect(dishid)}/>
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}></DishDetail>
        