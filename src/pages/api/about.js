import profile from "../../data/profile.json";

export default function handler(request, response) {
  response.status(200).json(profile.about);
}