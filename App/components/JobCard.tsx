import React from "react";

const JobCard = () => {
  return (
    <div className="rounded-md border border-gray-300 p-4 drop-shadow-sm flex flex-col gap-2 items-start">
      <div>
        <h1 className="font-semibold">Курьер по доставке еды</h1>
        <h1>до 60 000 руб.</h1>
      </div>
      <p>
        Доставка продуктов питания; Требования: Наличие устройства на базе
        Android версией 5.0 и выше; Наличие паспорта; Условия: Доход до 3400
        рублей в день; Бонус для новичков; Вы самостоятельно выбираете удобный
        для Вас район и время
      </p>
      <div>
        <div className="font-bold">КА &quot;Работа.ру&quot;</div>
        <div>Челябинск, ул 40-летия Победы, д 1</div>
      </div>
      <button className="bg-fuchsia-500 py-2 px-4 rounded-md text-white font-medium hover:bg-fuchsia-600 transition-colors">Откликнуться</button>
    </div>
  );
};

export default JobCard;
