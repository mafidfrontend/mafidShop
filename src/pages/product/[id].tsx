import axios from "axios";
import Image from "next/image";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { ProductIdType } from "@/type/Types";
import Cards from "@/pages/_companents/Cards";
import { useDispatch } from "react-redux";
import { addOrder } from "@/store/slices/ordersSlice";
import { addToCart } from "@/store/slices/cartSlice";
import { toast } from "sonner";

type ProductPageProps = {
  produktId: ProductIdType;
};

const ProductPage = ({ produktId }: ProductPageProps) => {
  const dispatch = useDispatch();

  const handleBuy = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          const address = `Latitude: ${latitude}, Longitude: ${longitude}`;
          const token = localStorage.getItem("authToken");

          axios
            .post(
              "https://nt.softly.uz/api/front/orders",
              {
                address: address,
                items: [
                  {
                    productId: produktId.id,
                    quantity: produktId.stock,
                  },
                ],
              },
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            )
            .then(() => {
              toast.success("Buyurtma muvaffaqiyatli yuborildi");
              dispatch(
                addOrder({
                  id: produktId.id,
                  name: produktId.name,
                  price: produktId.price,
                  imageUrl: produktId.imageUrl,
                })
              );
            })
            .catch((err) => {
              toast.error(
                `${err.message}. There was a problem with your request.`
              );
            });
        },
        function (error) {
          console.error("Lokatsiyani olishda xatolik:", error.message);
        }
      );
    } else {
      console.log("Brauzeringiz geolokatsiyani qo‘llab-quvvatlamaydi.");
    }
  };

  return (
    <>
      <Head>
        <title>{produktId.name}</title>
      </Head>
      <div className="container mx-auto py-10 px-4">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              width={400}
              height={400}
              src={produktId.imageUrl}
              alt={produktId.name}
              className="rounded-2xl shadow-lg object-cover max-w-full"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {produktId.name}
            </h1>
            <p className="text-gray-700 mb-4 text-base leading-relaxed">
              {produktId.description}
            </p>

            <p className="text-2xl font-semibold text-green-600 mb-2">
              ${produktId.price}
            </p>

            <p
              className={`font-medium ${
                produktId.stock > 0 ? "text-blue-600" : "text-red-600"
              }`}
            >
              {produktId.stock > 0 ? "Sotuvda mavjud" : "Sotuvda yo‘q"}
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleBuy}
                className="px-6 py-2 bg-amber-500 text-white rounded-2xl hover:bg-amber-600 transition shadow"
              >
                Xarid qilish
              </button>
              <button
                onClick={() => {
                  dispatch(addToCart(produktId));
                  toast.success(`${produktId.name} savatga qo'shildi!`);
                }}
                className="px-6 py-2 bg-gray-200 text-gray-800 rounded-2xl hover:bg-gray-300 transition shadow"
              >
                Savatga qo‘shish
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <Cards />
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string };

  try {
    const res = await axios.get(
      `https://nt.softly.uz/api/front/products/${id}`
    );
    return {
      props: {
        produktId: res.data,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default ProductPage;