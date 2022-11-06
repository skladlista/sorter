export default function ZadachaLista() {
  return (
    <div id="zadacha-lista" className="article zadacha-lista">
      <p className="article__title">ЗАДАЧА ЛИСТА</p>
      <div className="article__div">
        <ol>
          <li className="article__subtitle">
            В КАРТАХ БУКВА K НАПИСАНА ЛАТИНИЦЕЙ
          </li>
          <li className="article__subtitle">
            НАЙТИ ЛИСТЫ ЗАДАННЫЕ ЗА ПРЕДЫДУЩИЕ СУТКИ
          </li>
          <li className="article__subtitle">
            НАЙТИ ЛИСТЫ В ТАБЛИЦЕ С НУЖНЫМ ПОСТАВЩИКОМ
          </li>
          <li className="article__subtitle">
            НАЙТИ ЛИСТЫ В MB51 (ВИД ДВИЖЕНИЯ – 311, СКЛАД – 3037, И ВСТАВИТЬ
            ПАРТИЮ САП)
          </li>
          <li className="article__subtitle">СРАВНИТЬ ВЕС</li>
          <li className="article__subtitle">
            ЕСЛИ СОШЛОСЬ, ДОБАВИТЬ ДАТУ ЗАДАЧИ И ПРОПИСАТЬ «АВТОМАТ» ПРАВЕЕ
          </li>
          <li className="article__subtitle">
            ЕСЛИ НЕ СОШЛОСЬ, ТО ВЫЯСНИТЬ КАКИХ НЕТ И ПРОВЕРИТЬ ИХ В MB51 ТОЛЬКО
            ПО ПАРТИИ
          </li>
        </ol>
      </div>
    </div>
  );
}
