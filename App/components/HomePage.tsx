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
          <JobCard
            name={ 
              "Удаленный сотрудник отдела заботы в онлайн школу" 
            } 
            price={25000} 
            description={ 
              "Проверять домашние задания учеников на Getcourse (специальные знания не требуются); Смотреть уроки онлайн школы; Оповещать учеников через мессенджеры о важных событиях в учебном процессе; Модерировать чаты; Работать с гугл таблицами; Звонить ученикам по учебным процессам (продаж НЕТ)" 
            } 
            company={"zabota.ru"} 
            city={"Челябинск, ул Братьев Каширинных, д 110"}
          />
          <JobCard
            name={ 
              "Водитель-загонщик" 
            } 
            price={48000} 
            description={ 
              "Управлять машиной марки MAN, следить за процессом погрузки товара, доставлять товары в магазины сети." 
            } 
            company={"magnit.ru"} 
            city={"Челябинск, ул Машиностроителей, д 7в"}
          />
          <JobCard
            name={ 
              "Программист 1С" 
            } 
            price={150000} 
            description={ 
              "Разработка нового и доработка существующего функционала (программирование) информационных систем; Разработка WEB-сервисов; Составление документации по разработке Интеграции с другими информационными системами; Оптимизация кода." 
            } 
            company={"galamart.ru"} 
            city={"Челябинск, ул Ленина, д 33"}
          />
          <JobCard
            name={  
              "Cocos Creator Developer / Game Developer"  
            }  
            price={200000}  
            description={  
              "разработка мобильной игры под Android/iOS; программирование логики и игровых механик с использованием инструментов Cocos Creator; создание инструментов для разработки игровых уровней; организация взаимодействия приложения с аналитическими системами и социальными сетями; взаимодействие с командой проекта (UI дизайнер, художники, гейм-дизайнер, QA и т.д.); развитие игры на Cocos Creator; принимать решения по развитию технической части проекта и вести наставничество; взаимодействие и синхронизация данных с серверной частью c использованием документированного API; доработка‚ оптимизация, тестирование и развитие существующего кода."  
            }  
            company={"Rockstone.ru"}  
            city={"Челябинск, ул Бейвеля, д 5"}
          />
          <JobCard
            name={  
              "Ассистент менеджера по работе с маркетплейсом (Удаленно)"  
            }  
            price={30000}  
            description={  
              "Заполнение карточек товара OZON, поддержка покупателей в чате, анализ цен конкурентов, написание ТЗ для дизайнеров."  
            }  
            company={"ozon.ru"}  
            city={"Челябинск, ул Чичерина, д 8"}
          />
          <JobCard
            name={ 
              "Оператор на телефоне (Удаленно)" 
            } 
            price={45000} 
            description={ 
              "Обзвон потенциальных клиентов (базу для обзвона и сценарии переговоров мы предоставляем). Цель звонка - договориться с клиентом о дистанционной демонстрации нашей системы (демонстрацию проводит Специалист отдела продаж) . Информационная e-mail рассылка в адрес потенциальных клиентов. Деловая переписка с лицами, принимающими решение (генеральные директора, главные бухгалтеры, юристы). Без продаж!" 
            } 
            company={"Runa.ру"} 
            city={"Москва, ул Интернационалистов, д 23б"}
          />
          <JobCard
            name={ 
              "Курьер" 
            } 
            price={90000} 
            description={ 
              "Доставка еды из ресторанов (до 3кг), расчет покупателей, отчетность, телефон на базе Android (предоставляем авто курьерам имеющие водительские права). Официальное трудоустройство, свободный график (от 4 часов в сутки)" 
            } 
            company={"Яндекс.ру"} 
            city={"Москва, ул Целинная, д 15а"}
          />
          <JobCard
            name={ 
              "Кладовщий на склад в OZON" 
            } 
            price={55000} 
            description={ 
              "Вам предстоит принимать и размещать товар, Работать с ручным сканнером ТСД, Упаковывать и формировать посылки, Выявлять бракованный товар." 
            } 
            company={"озон.ру"} 
            city={"Москва, ул Кремлевская, д 10а"}
          />
          <JobCard
            name={ 
              "Оператор службы поддержки в Яндекс Плюс" 
            } 
            price={25000} 
            description={ 
              "Отвечать на звонки клиентов, отвечать на обращения по электронной почте и в чатах, решать вопросы связанные с серверами Яндекса, в случае необходимости обращаться за помощью к сотрудникам других отделов." 
            } 
            company={"yandex.ru"} 
            city={"Москва, ул Октябрьская, д 5"}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
