
const eventsBase = [
    {
        id: 1,
        image: "/Photos/event1.jpg",
        cathegory: "Meeting",
        author: "Admin",
        date: "March 4 2021",
        title: "Vivamus hendrerit wisi ded non",
        text: "Quisquam earum ut, impedit fugiat ullam ad consectetur eligendi vero officia aut asperiores, ab tempora consequuntur voluptatem accusantium. Assumenda nulla nemo nobis, deserunt explicabo consequatur ut sit sint veritatis voluptatum tenetur repellendus distinctio ratione facere laborum ex dignissimos quia odit ducimus! Nobis dolorem aut laudantium in fugit, quae consequatur sed quibusdam natus iste ex. Ut accusamus corrupti consequuntur ex omnis qui labore aspernatur commodi at. Optio dolorem dolor nostrum, ab ut dicta quo debitis delectus veniam sint at? Obcaecati doloremque consequuntur quisquam assumenda ex explicabo recusandae?",
    },
    {
        id: 2,
        image: "/Photos/event2.jpg",
        cathegory: "Recipes",
        author: "Admin",
        date: "March 6 2021",
        title: "Recusandae iusto numquam ad",
        text: "Consequatur, sequi itaque voluptatibus cum consequuntur, repellendus ullam totam culpa assumenda magni quidem labore magnam repellat omnis consectetur, at voluptates molestiae suscipit doloremque. Temporibus distinctio nostrum commodi ratione animi, id quisquam! Porro, quod. Tenetur quidem voluptatibus velit adipisci at, nulla reprehenderit error, doloribus rerum, harum vitae esse voluptatum eius? Perspiciatis at pariatur ipsum quo laboriosam eius et veritatis labore quia, numquam iusto similique quasi aspernatur architecto cum iure temporibus totam accusamus dolor ipsam sed itaque.",
    },
    {
        id: 3,
        image: "/Photos/event3.jpg",
        cathegory: "Live music",
        author: "Admin",
        date: "March 6 2021",
        title: "Sit amet consectetur elit",
        text: "Quia cum eligendi numquam sint perspiciatis commodi natus blanditiis dolore nihil at. Aut quo optio dolorum est nemo sint soluta eveniet voluptates, totam architecto exercitationem ipsa neque expedita repudiandae qui nobis fugit consectetur, veniam a suscipit? Blanditiis at doloribus velit. Earum, autem magnam assumenda sint eum maiores quae atque illo vitae deleniti, repellat dolorem amet, qui fugiat doloremque sunt in? Accusamus hic nostrum dignissimos, reiciendis omnis corporis fugiat animi nesciunt rerum obcaecati illo ipsa tenetur sapiente iure pariatur perspiciatis odio id. Labore ipsam ex voluptates?",
    },
    {
        id: 4,
        image: "/Photos/event4.jpg",
        cathegory: "Stuff",
        author: "Admin",
        date: "March 9 2021",
        title: "Fuga eveniet dolor ab nihil",
        text: "Excepturi quia labore id ratione doloremque voluptates sequi fuga totam facere neque odit error rerum a fugiat, maxime omnis quis accusamus beatae, animi asperiores? Voluptatum temporibus harum necessitatibus minus eius, mollitia accusamus amet nesciunt consectetur sit neque ratione at incidunt officiis. Totam hic, quo molestias tempore molestiae placeat adipisci voluptatem temporibus sapiente accusantium alias exercitationem quis voluptate mollitia enim beatae? Ullam aut nesciunt ea molestiae. Repudiandae inventore sequi, dolore, unde dolor qui consequatur ipsam dicta natus cumque at expedita harum architecto ullam doloremque officiis vel eligendi nihil laborum, molestias ducimus?",
    },
    {
        id: 5,
        image: "/Photos/event5.jpg",
        cathegory: "Meeting",
        author: "Admin",
        date: "March 9 2021",
        title: "Possimus nulla nostrum cumque",
        text: "Ipsa, vel praesentium quas quisquam expedita culpa, minima labore doloribus at accusantium totam numquam exercitationem consequatur architecto voluptatem. Eum ut soluta inventore. Quod quis, et doloribus eligendi error, veniam ratione veritatis magnam amet optio, perspiciatis hic facilis? Sapiente deserunt consequatur ducimus nihil velit hic aliquam quibusdam ipsa molestias iusto! Earum cumque inventore non beatae fugit quibusdam sit nobis, tempore quasi, ipsa minus consequuntur mollitia sapiente magni ratione natus quia aliquid nostrum amet cum consequatur? Saepe obcaecati mollitia libero dolores minus quae ex nesciunt perspiciatis.",
    },
    {
        id: 6,
        image: "/Photos/event6.jpg",
        cathegory: "Recipes",
        author: "Admin",
        date: "March 11 2021",
        title: "Debitis, facere delectus",
        text: "Dolorem nam atque odit est expedita similique nisi quasi qui recusandae? Accusantium, provident labore amet vitae ullam eius cum quidem quisquam asperiores odit ipsa nesciunt nostrum aspernatur consequatur ratione ipsam optio molestias rerum facilis sapiente pariatur quis. Deserunt consectetur nulla eos et vitae possimus amet modi exercitationem officiis, itaque nobis doloremque dolorum placeat laboriosam. Inventore quaerat rem neque corporis quis, quia modi aut at perferendis exercitationem, quasi alias! Ipsa quod ullam ut laudantium enim iure, explicabo quo asperiores distinctio officia corporis dicta velit iste earum culpa eum sunt?",
    },
    {
        id: 7,
        image: "/Photos/event7.jpg",
        cathegory: "Recipes",
        author: "Admin",
        date: "March 12 2021",
        title: "Nulla corrupti vitae illum!",
        text: "Eligendi officiis provident ratione iste? Ab deleniti voluptatibus incidunt repudiandae, laboriosam vitae nulla esse unde ipsa facilis, dolorum error ducimus rerum similique iure eaque itaque omnis sapiente consequuntur quaerat, accusamus aliquid explicabo culpa maiores. Commodi recusandae ea, ullam saepe nemo magnam qui excepturi quod sapiente soluta error alias voluptate fugit id assumenda aliquam accusamus voluptates, laudantium vel quos quisquam! Culpa quaerat earum, dolore fugiat maxime voluptates, quod sint, doloribus est doloremque illo! Nesciunt architecto est molestias reiciendis qui. Similique veniam dignissimos esse aliquid fugiat est perspiciatis natus earum! Ea distinctio minus corporis error excepturi dolore exercitationem incidunt tenetur earum, optio labore fugiat quis, maiores voluptatibus commodi?",
    },
    {
        id: 8,
        image: "/Photos/event8.jpg",
        cathegory: "Stuff",
        author: "Admin",
        date: "March 14 2021",
        title: "Quod itaque laudantium ab a",
        text: "Eaque omnis quasi eligendi dolorem dolor! Impedit mollitia et odio illum nulla cum natus! Asperiores veritatis, doloremque suscipit, rerum minus distinctio ipsum praesentium similique debitis, deleniti numquam. Voluptates maxime nihil alias perspiciatis, suscipit amet soluta aliquid tenetur, impedit quaerat dolor at iure eum et quam nisi voluptatem facere! Alias eaque cum pariatur consequatur quaerat libero dolore, laudantium, fugit consequuntur architecto, corporis odio voluptatum dignissimos dolores necessitatibus ea ad officia magnam. Qui quisquam expedita veritatis. Aperiam aliquam sunt ipsa voluptate explicabo soluta ea reiciendis nulla modi quae, velit fugit doloribus architecto ipsam, tempora earum nesciunt sed ad minima provident tempore dolor!",
    },
]

export const getEventsObj = (array) => array.reduce((obj, event) => ({
    ...obj,
    [event.id] : event
}), {})

export default eventsBase