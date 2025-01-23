<template>
  <form class="booking-card" action="#">
    <div class="booking-card__owerflow-element hidden-mobile"></div>

    <div class="booking-card__form">
      <div class="booking-card__form__input">
        <label for="destination">DESTINATION</label>
        <input type="text" name="destination" id="destination" placeholder="Dubai" required />
      </div>

      <div class="booking-card__form__input">
        <label for="person">PERSON</label>
        <select name="person" id="person">
          <option value="2">1</option>
          <option value="2" selected>2</option>
        </select>
      </div>

      <div class="booking-card__form__input">
        <label for="check in">CHECK IN</label>
        <select name="check in" id="check in">
          <option value="1" selected>Sun, 17th Sep 2020</option>
        </select>
      </div>

      <div class="booking-card__form__input">
        <label for="check out">CHECK OUT</label>
        <select name="check out" id="check out">
          <option value="1" selected>Tue, 17th Oct 2020</option>
        </select>
      </div>
    </div>

    <button class="booking-card__button">
      <span> Book&nbsp;<br class="line-break" />Now </span>

      <span class="icon icon__arrow-right"></span>
    </button>
  </form>
</template>
