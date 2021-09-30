//BlogReadingApp is composed of BlogReader panel and a BlogPostList panel
//BlogPostList is composed of CLICKABLE titles that move post to BlogReader panel (could be an ASIDE with a UL of LIs)
//BlogReader is composed of blog posts which are composed of a title and a body
import {useState, useEffect} from 'react';
import BlogPreview from './BlogPreview';
import BlogPostList from './BlogPostList';

function BlogReadingApp() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts([
            {
                id:1,
                title: 'She Believed She Could',
                text: 'Brewed fair trade frappuccino aged foam aftertaste, skinny grinder, organic turkish espresso americano grounds mocha con panna spoon mug sweet single origin. Blue mountain brewed, irish, aged, chicory, et a acerbic dark as, breve, doppio, roast, so dripper milk barista bar  chicory extra. Percolator aftertaste frappuccino bar  cinnamon, id kopi-luwak grounds shop a filter cup espresso. Milk latte medium con panna robusta viennese, mazagran aroma plunger pot crema steamed dripper cream sit roast. Medium bar , aromatic, crema dripper, spoon, foam, viennese saucer sugar macchiato milk strong. Redeye ristretto seasonal, cup robust, saucer organic, et, java mocha coffee foam, chicory instant java grounds java. Cappuccino brewed java aged blue mountain body caffeine blue mountain, americano ut, crema wings, barista lungo cappuccino white espresso. Coffee, plunger pot id est doppio, ut steamed viennese that latte grounds irish instant seasonal latte. Extraction viennese americano trifecta decaffeinated siphon frappuccino macchiato white, caffeine redeye shop saucer viennese. Sit aged organic that ut viennese est, sugar ut, lungo, aromatic, beans, sugar, java, sweet, crema breve coffee et organic americano. Half and half froth kopi-luwak, iced coffee viennese saucer, body lungo cinnamon single origin ristretto milk whipped dripper. Coffee bar  cultivar viennese, fair trade coffee carajillo crema organic cultivar viennese qui aromatic.',
            }, {
                id:2,
                title: 'So She Did',
                text: 'Extra  cultivar instant crema, ut blue mountain, breve, pumpkin spice half and half, whipped single shot ristretto arabica that. Decaffeinated, and instant extra  saucer, acerbic crema extra  lungo carajillo et variety sugar acerbic est half and half. Affogato doppio coffee, blue mountain, chicory eu, sweet, ut seasonal cream a cup id caffeine. Skinny that skinny black galão crema et dripper espresso caffeine roast rich id turkish half and half sit frappuccino french press shop. White frappuccino, arabica chicory medium so barista whipped mug ristretto, iced cultivar, crema caffeine arabica viennese extra  kopi-luwak. Breve caramelization, rich filter sweet aroma, id, cinnamon that barista, white, filter, iced a, breve caramelization mug coffee et crema. Qui, caramelization cream fair trade and, aroma, trifecta coffee, so carajillo, filter bar  mazagran flavour, eu black ut caffeine carajillo sugar filter percolator. Acerbic french press, to go, chicory variety, et, redeye crema single shot mocha, brewed siphon fair trade latte americano spoon.',
            }, {
                id:3,
                title: 'When There Are Nine',
                text: 'Single origin trifecta, to go, coffee seasonal aroma, filter decaffeinated java aromatic sit et seasonal. Rich fair trade aged steamed, percolator to go white, single shot dripper instant, steamed, at dripper coffee, eu affogato macchiato saucer french press carajillo siphon wings. Ut id, crema froth body dark, steamed, sugar saucer single shot barista carajillo froth con panna barista doppio. Aged, body irish trifecta id arabica, roast coffee, organic, black, crema, plunger pot, acerbic, café au lait caffeine qui spoon siphon filter caramelization iced. Coffee white frappuccino coffee, spoon flavour, whipped doppio chicory medium et caramelization ut, beans, single origin carajillo, in spoon redeye siphon cortado. Mazagran redeye dark, cinnamon cappuccino flavour white and strong cinnamon, blue mountain percolator americano cinnamon, sugar to go iced a medium filter. Arabica french press percolator to go milk ut, sugar, blue mountain cream coffee espresso caffeine eu aromatic to go cup latte, single origin roast ristretto foam organic robust. Et cream, a robusta, qui espresso, foam, spoon, siphon kopi-luwak half and half pumpkin spice crema breve siphon whipped rich steamed caffeine froth decaffeinated ut grinder.',
            }, {
                id:4,
                title: 'Women Belong In All Places Where Decisions Are Being Made',
                text: 'Medium, organic skinny bar  trifecta fair trade, caffeine single origin, wings, arabica medium cinnamon blue mountain black, redeye strong grinder arabica half and half galão java aged cappuccino to go. Strong, milk saucer, at turkish, crema half and half coffee frappuccino galão crema, cortado frappuccino cortado, flavour eu latte mazagran rich aftertaste ut eu cream rich. Seasonal, kopi-luwak acerbic at, plunger pot organic frappuccino medium froth black crema, galão half and half, redeye con panna acerbic aftertaste cultivar grounds aroma that pumpkin spice. Dripper rich irish to go espresso, flavour blue mountain galão, fair trade sit crema foam froth mug as wings caramelization. Affogato organic, aromatic beans percolator trifecta arabica as, so, viennese est aroma roast arabica.',
            }
        ])
    }, []);


    ///////not sure if this section should go in here or in BlogPreview/////////
    // const [selection, setSelection] = useState({})

    // function displayBlog(id) {
    //     let index = posts.findIndex((element) => element.id === id);
    //     const selectedPost = posts[index];
    //     setSelection(selectedPost);
    // }
    ////////////////////////////////////////////////////////////////////////////////



    return (
        <main>
            <BlogPreview />
            <BlogPostList posts={posts}/>
        </main>
    )
}

export default BlogReadingApp
