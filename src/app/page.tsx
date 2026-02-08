import { Container, Filters, Title, TopBar } from "@/components/shared";
import { ProductGroupList } from "@/components/shared/product-group-list/product-group-list";

export default function Home() {
  return (
    <>
      <Container externalClass="mt-10 ">
        <Title text="Все пиццы" size="lg" externalClass="font-extrabold" />
      </Container>

      <TopBar />

      <Container externalClass="mt-10 pb-14">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductGroupList
                title="Пиццы"
                items={[
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imgUrl:
                      "https://media.dodostatic.net/image/r:292x292/0198bf57bc517218ab93c762f4b0193e.avif",
                    price: 415,
                    items: [{ price: 415 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imgUrl:
                      "https://media.dodostatic.net/image/r:292x292/0198bf57bc517218ab93c762f4b0193e.avif",
                    price: 415,
                    items: [{ price: 415 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imgUrl:
                      "https://media.dodostatic.net/image/r:292x292/0198bf57bc517218ab93c762f4b0193e.avif",
                    price: 415,
                    items: [{ price: 415 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imgUrl:
                      "https://media.dodostatic.net/image/r:292x292/0198bf57bc517218ab93c762f4b0193e.avif",
                    price: 415,
                    items: [{ price: 415 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imgUrl:
                      "https://media.dodostatic.net/image/r:292x292/0198bf57bc517218ab93c762f4b0193e.avif",
                    price: 415,
                    items: [{ price: 415 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imgUrl:
                      "https://media.dodostatic.net/image/r:292x292/0198bf57bc517218ab93c762f4b0193e.avif",
                    price: 415,
                    items: [{ price: 415 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imgUrl:
                      "https://media.dodostatic.net/image/r:292x292/0198bf57bc517218ab93c762f4b0193e.avif",
                    price: 415,
                    items: [{ price: 415 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imgUrl:
                      "https://media.dodostatic.net/image/r:292x292/0198bf57bc517218ab93c762f4b0193e.avif",
                    price: 415,
                    items: [{ price: 415 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductGroupList
                title="Комбо"
                items={[
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imgUrl:
                      "https://media.dodostatic.net/image/r:292x292/0198bf57bc517218ab93c762f4b0193e.avif",
                    price: 415,
                    items: [{ price: 415 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imgUrl:
                      "https://media.dodostatic.net/image/r:292x292/0198bf57bc517218ab93c762f4b0193e.avif",
                    price: 415,
                    items: [{ price: 415 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imgUrl:
                      "https://media.dodostatic.net/image/r:292x292/0198bf57bc517218ab93c762f4b0193e.avif",
                    price: 415,
                    items: [{ price: 415 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imgUrl:
                      "https://media.dodostatic.net/image/r:292x292/0198bf57bc517218ab93c762f4b0193e.avif",
                    price: 415,
                    items: [{ price: 415 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imgUrl:
                      "https://media.dodostatic.net/image/r:292x292/0198bf57bc517218ab93c762f4b0193e.avif",
                    price: 415,
                    items: [{ price: 415 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imgUrl:
                      "https://media.dodostatic.net/image/r:292x292/0198bf57bc517218ab93c762f4b0193e.avif",
                    price: 415,
                    items: [{ price: 415 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imgUrl:
                      "https://media.dodostatic.net/image/r:292x292/0198bf57bc517218ab93c762f4b0193e.avif",
                    price: 415,
                    items: [{ price: 415 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imgUrl:
                      "https://media.dodostatic.net/image/r:292x292/0198bf57bc517218ab93c762f4b0193e.avif",
                    price: 415,
                    items: [{ price: 415 }],
                  },
                ]}
                categoryId={2}
              />
              <ProductGroupList
                title="Закуски"
                items={[
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imgUrl:
                      "https://media.dodostatic.net/image/r:292x292/0198bf57bc517218ab93c762f4b0193e.avif",
                    price: 415,
                    items: [{ price: 415 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imgUrl:
                      "https://media.dodostatic.net/image/r:292x292/0198bf57bc517218ab93c762f4b0193e.avif",
                    price: 415,
                    items: [{ price: 415 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imgUrl:
                      "https://media.dodostatic.net/image/r:292x292/0198bf57bc517218ab93c762f4b0193e.avif",
                    price: 415,
                    items: [{ price: 415 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imgUrl:
                      "https://media.dodostatic.net/image/r:292x292/0198bf57bc517218ab93c762f4b0193e.avif",
                    price: 415,
                    items: [{ price: 415 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imgUrl:
                      "https://media.dodostatic.net/image/r:292x292/0198bf57bc517218ab93c762f4b0193e.avif",
                    price: 415,
                    items: [{ price: 415 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imgUrl:
                      "https://media.dodostatic.net/image/r:292x292/0198bf57bc517218ab93c762f4b0193e.avif",
                    price: 415,
                    items: [{ price: 415 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imgUrl:
                      "https://media.dodostatic.net/image/r:292x292/0198bf57bc517218ab93c762f4b0193e.avif",
                    price: 415,
                    items: [{ price: 415 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imgUrl:
                      "https://media.dodostatic.net/image/r:292x292/0198bf57bc517218ab93c762f4b0193e.avif",
                    price: 415,
                    items: [{ price: 415 }],
                  },
                ]}
                categoryId={3}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
