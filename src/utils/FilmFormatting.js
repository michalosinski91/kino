// adjusts the american age rating to polish version
export function formatAgeRating(rating) {
  let ageRating = "Brak informacji";
  if (rating == "R") {
    ageRating = "17+";
  } else if (rating == "PG-13") {
    ageRating = "13+";
  } else if (rating == "PG" || rating == "G") {
    ageRating = "Familijny";
  }
  return ageRating;
}
