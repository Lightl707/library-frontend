const Profile = () => (
  <div className="content profile-page">
    <div className="profile-page_block">
      <div className="profile-page__user">
        <div className="profile-page__user-name">
          <img
            src="img/UserIcon.png"
            alt="img"
          />
          <p>
            Исмуханов <br />
            Арлан
          </p>
        </div>
        <p className="profile-page__user-info">Присоединился в 2018 году</p>
        <p className="profile-page__user-data">Книг прочитано: 13</p>
      </div>
      <div className="profile-page__history">
        <h2>История</h2>
        <ul>
          <li className="profile-page__history__item">
            <button className="tablinks">Читаю сейчас</button>
          </li>
          <li className="profile-page__history__item">
            <button className="tablinks">Хочу прочитать</button>
          </li>
          <li className="profile-page__history__item">
            <button className="tablinks">Уже прочитал</button>
          </li>
        </ul>
      </div>
    </div>
    <div class="profile-page__books">
      <div className="profile-page__books__item">
        <img className="profile-page__user-img" src="img/card.jpeg" />
        <p className="profile-page__books__item-name">
          The Hobbit by J.R.R. Tolkien
        </p>
      </div>

      <div className="profile-page__books__item">
        <img className="profile-page__user-img" src="img/card.jpeg" />
        <p className="profile-page__books__item-name">
          The Hobbit by J.R.R. Tolkien
        </p>
      </div>

      <div className="profile-page__books__item">
        <img className="profile-page__user-img" src="img/card.jpeg" />
        <p className="profile-page__books__item-name">
          The Hobbit by J.R.R. Tolkien
        </p>
      </div>

      <div className="profile-page__books__item">
        <img className="profile-page__user-img" src="img/card.jpeg" />
        <p className="profile-page__books__item-name">
          The Hobbit by J.R.R. Tolkien
        </p>
      </div>

      <div className="profile-page__books__item">
        <img className="profile-page__user-img" src="img/card.jpeg" />
        <p className="profile-page__books__item-name">
          The Hobbit by J.R.R. Tolkien
        </p>
      </div>
      
    </div>
  </div>
);

export default Profile;
