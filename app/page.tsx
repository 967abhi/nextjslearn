import Card from "@/components/card";
import { createClient } from "@/supabase/client";
import Image from "next/image";


export const revalidate=0;

export default async function Home() {
  const supabase=createClient();
  // const products=[
  //   {
  //     id:0,
  //     name:"Mushroom Orange Lamp",
  //     description:"Mushroom Orange Lamp Desc",
  //     price:40,
  //     imageUrl:"https://ljtbtfatnohiygvcikex.supabase.co/storage/v1/object/public/STORAGE/Lamp.webp"
  //   },
  //   {
  //     id:1,
  //     name:"JEEP WRANGLER",
  //     description:"Embark on your next adventure with the ultimate off-road companion – our stunning Jeep Wrangler is ready to conquer any terrain! This rugged beauty combines iconic design with top-notch performance, boasting a powerful engine that roars to life with every turn of the key. Dressed in a sleek and stylish exterior, this Jeep Wrangler is not just a vehicle; it's a statement. From city streets to untamed trails, experience the freedom of open-air driving with its removable top and doors, allowing you to soak in the sunshine or gaze at the starlit sky on your nocturnal escapades. Inside, the spacious and comfortable cabin beckons you with modern amenities, blending luxury with adventure seamlessly. Cutting-edge technology keeps you connected and in control, ensuring that your journey is not only thrilling but also convenient. Equipped with trail-rated capabilities, this Jeep Wrangler is more than just a mode of transportation; it's a promise of exploration and discovery. Tackle challenging terrains with confidence, thanks to its robust 4x4 capabilities and advanced suspension system that smoothens even the roughest rides. Don't miss the chance to make memories and turn heads wherever you go – seize the opportunity to own this Jeep Wrangler today! Unleash the adventurer in you and let this iconic vehicle be the key to unlocking a world of limitless possibilities. Act fast, and let the journey begin!",
  //     price:7900,
  //     imageUrl:"https://ljtbtfatnohiygvcikex.supabase.co/storage/v1/object/public/STORAGE/Jeepwrangler.webp?t=2024-07-17T18%3A11%3A15.544Z"
  //   },
  //   {
  //     id:2,
  //     name:"slick sneaker premium",
  //     price:4500,
  //     description:"🌟 Limited Edition Designs: Each pair in our collection is a unique masterpiece, showcasing limited edition designs that set you apart from the crowd. Own a piece of sneaker history with styles that stand out and make a statement. 🔍 Rare and Sought-After Models: Discover sneakers that are more than just shoes; they are a testament to rarity and exclusivity. Our collection features sought-after models that are not easily found, making them a must-have for avid collectors and fashion enthusiasts. 👟 Premium Materials: Crafted with the finest materials, our rare find sneakers boast exceptional quality and durability. From luxurious leather to cutting-edge textiles, experience comfort and style that surpasses the ordinary.",
  //     imageUrl:"https://ljtbtfatnohiygvcikex.supabase.co/storage/v1/object/public/STORAGE/Sneaker.webp"
  //   }
  // ]
  // const Allproduct=[
  //   {
  //     id:0,
  //     name:"gray couch",
  //     description:"Transform your living space with the epitome of modern elegance – our exquisite gray couch is the perfect blend of style and comfort. This sleek and sophisticated centerpiece effortlessly complements any decor, adding a touch of contemporary charm to your home. Crafted with precision and attention to detail, the gray upholstery exudes a timeless allure, providing a neutral canvas that allows you to express your personal style through accessories and accents. The plush cushions and generous seating invite you to sink in and unwind, offering a haven of relaxation after a long day. Whether you're entertaining guests or enjoying a quiet evening alone, this gray couch becomes the focal point of your living room, creating a cozy and inviting atmosphere. Its versatility allows it to seamlessly integrate into various design themes, making it an ideal choice for those who appreciate both form and function. Invest in comfort and style – elevate your home with our stunning gray couch. Embrace the contemporary allure and transform your living space into a haven of sophistication. Make a statement with a piece that not only reflects your taste but also provides a luxurious retreat for you and your loved ones. Dive into a world of comfort and style – your new gray couch awaits!",
  //     price:800,
  //     imageUrl:"https://ljtbtfatnohiygvcikex.supabase.co/storage/v1/object/public/STORAGE/Gray.webp"

  //   },
  //   {
  //     id:1,
  //     name:"RED NIKE SHOES",
  //     description:"Don't just wear shoes – make a statement. Elevate your footwear game with the unmistakable style and performance of our Red Nike shoes. Dare to be different, dare to be bold – step confidently into the future with the power of red at your feet! 🏃 Performance-Driven: Designed for the go-getters and trendsetters, these Nikes are not just shoes; they're a testament to your active lifestyle. From the gym to the streets, conquer every terrain with confidence and style.",
  //     price:98,
  //     imageUrl:"https://ljtbtfatnohiygvcikex.supabase.co/storage/v1/object/public/STORAGE/Nike.webp"
  //   }
  //   ,{
  //     id:2,
  //     name:"RAINBOW SILICONE HEAT INSULATION PAD",
  //     PRICE:10,
  //     description:"Soft Table Mat, Heat Resistant Silicone Trivets For Pots And Pans, Square Silicone Hot Pads, Countertop Protector, Tabletop Protection, Home Kitchen Dining Table Decor.",
  //     imageUrl:"https://ljtbtfatnohiygvcikex.supabase.co/storage/v1/object/public/STORAGE/Rainbow.webp?t=2024-07-17T18%3A21%3A52.943Z"
  //   },
  //   {
  //     id:3,
  //     name:"Mushroom Orange Lamp",
  //     description:"Mushroom Orange Lamp Desc",
  //     price:40,
  //     imageUrl:"https://ljtbtfatnohiygvcikex.supabase.co/storage/v1/object/public/STORAGE/Lamp.webp"
  //   },
  //   {
  //     id:4,
  //     name:""
  //   }
  // ];
// ====Implementing the top products to fetch using supabase and query======
const {data:topProducts,error:topProductsError}=await supabase
.from("easysell-products")
.select()
.eq("boost",true);

  // ===connect with the supabase====
  const {data:products,error}=await supabase.from("easysell-products").select();
  // console.log({data});
  if(!topProducts){
    return <p>Not found</p>
  }
  if(!products){
    return <p>Not found</p>
  }
  return (
    <main className="min-h-screen mx-auto  max-w-[100rem] ">
      <div className="px-12 pt-12 pb-20">
        <div className="flex flex-col xl:flex-row gap-2 xl:gap-40">
          <div className="pt-12">
            <h2 className="text-4xl mb-16">OUT TOP PRODUCTS</h2>
            <p className="text-xl">You can pay to boost your products here.</p>

          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 xl:gap-12">
          { topProducts && 
        topProducts.map((product)=>(
          <Card key={`${product.name}-${product.id}`} {...product} imageUrl={`${process.env.SUPABASE_URL}/storage/v1/object/public/STORAGE/${product.imageUrl}`}/>
        ))
      }
            

          </div>
          

        </div>
        <h2 className="text-4xl mt-20 mb-16">ALL PRODUCTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {
        products.map((product)=>(
          <Card key={`${product.name}-${product.id}`} {...product} imageUrl={`${process.env.SUPABASE_URL}/storage/v1/object/public/STORAGE/${product.imageUrl}`}/>
        ))
      }

          </div>
      </div>
     
     
    </main>
  );
}
