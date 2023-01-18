import React from "react";
import JobCard from "./JobCard";

const HomePage = () => {
  return (
    <div>
      <div className="bg-susu bg-no-repeat bg-cover -mx-64 h-96 flex flex-col justify-center items-center pr-72 mb-12">
        <div className="flex flex-col items-start gap-4 w-2/5">
          <h1 className="text-5xl font-semibold text-white ">
            Работа для каждого
          </h1>
          <div className="flex w-full">
            <input
              type="search"
              className="p-2 w-full rounded-sm"
              placeholder="Должность, профессия, компания"
            />
            <button className="bg-fuchsia-500 px-8 rounded-sm text-white font-medium hover:bg-fuchsia-600 transition-colors">
              Найти
            </button>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-semibold mb-8">
          Вакансии дня
        </h1>
        <div className="grid grid-cols-2 gap-4">
          <JobCard
            name={
              "Курьер по доставке еды"
            }
            price={60000}
            description={
              "Доставка продуктов питания; Требования: Наличие устройства на базе Android версией 5.0 и выше; Наличие паспорта; Условия: Доход до 3400 рублей в день; Бонус для новичков; Вы самостоятельно выбираете удобный для Вас район и время"
            }
            company={"Работа.ру"}
            city={'Челябинск, ул 40-летия Победы, д 1'}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
