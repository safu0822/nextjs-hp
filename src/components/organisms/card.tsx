import Image from "next/image";
import SnsIcon from "../molecules/sns-icon";

export default function Card({ title = "タイトルがありません", address = "住所がありません", mail = "メールアドレスがありません", phone = "電話番号がありません" }: { title:string, address:string, mail:string, phone:string })
{
  return (
    <div className="bg-white text-center shadow-xl p-8 w-80 rounded">
      <div className="mt-4">
        <p className="font-bold">{title}</p>
      </div>
      <div className="flex justify-center mt-4">
        <Image
          src="/images/avatar.jpg"
          alt="Avatar"
          width={60}
          height={60}
          className="rounded-full"
        />
      </div>
      <div className="mt-4">
        <p className="font-bold">Address</p>
        <p className="text-xs mt-2 text-gray-600">{address}</p>
        <p className="font-bold mt-3">E-mail</p>
        <p className="text-xs mt-2 text-gray-600">{mail}</p>
        <p className="font-bold mt-3">Phone</p>
        <p className="text-xs mt-2 text-gray-600">{phone}</p>
      </div>
      <SnsIcon/>
    </div>
  );
}