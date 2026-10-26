import { getRequestConfig } from "next-intl/server";
// Static imports: Cloudflare edge builds cannot resolve runtime dynamic imports.
import en from "./messages/en.json";
import ru from "./messages/ru.json";
import ar from "./messages/ar.json";
import es from "./messages/es.json";
import fr from "./messages/fr.json";
import pt from "./messages/pt.json";

const MESSAGES: Record<string, typeof en> = { en, ru, ar, es, fr, pt };

export default getRequestConfig(async ({ locale }) => {
  const key = String(locale);
  const messages = MESSAGES[key] ?? en;
  return { locale: key, messages };
});
