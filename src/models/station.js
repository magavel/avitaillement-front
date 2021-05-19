/* eslint-disable no-underscore-dangle,no-return-assign */
export default class Station {
  /**
     *
     * @param {string} id
     * @param {string} name
     * @param {number} longitude
     * @param {number} latitude
     * @param {number []} gasoils
     * @param {string []} media
     * @param {string } description
     */
  constructor(
    {
      id,
      name,
      longitude,
      latitude,
      gasoils,
      media,
      description,
    },
  ) {
    this._id = id;
    this._name = name;
    this._longitude = longitude;
    this._latitude = latitude;
    this._gasoils = gasoils;
    this._media = media;
    this._description = description;
  }

  get id() {
    return this._id;
  }

  set id(value) {
    return this._id = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    return this._name = value;
  }

  get description() {
    return this._description;
  }

  set description(value) {
    return this._description = value;
  }

  get gasoils() {
    return this._gasoils;
  }

  set gasoils(value) {
    return this._gasoils = value;
  }

  get longitude() {
    return this._longitude;
  }

  set longitude(value) {
    return this._longitude = value;
  }

  get latitude() {
    return this._latitude;
  }

  set latitude(value) {
    return this._latitude = value;
  }

  get media() {
    return this._media;
  }

  set media(value) {
    return this._media = value;
  }
}
