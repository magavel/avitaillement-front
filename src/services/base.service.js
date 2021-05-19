import HttpCode from '@/models/httpCode.enum';

export default class BaseService {
  /**
     * Valide la réponse http.
     * @param response l'objet reponse
     */
  // eslint-disable-next-line class-methods-use-this
  validateResponse(response) {
    switch (response.status) {
      case HttpCode.BAD_REQUEST: { throw new Error('Données incorrecte'); }
      case HttpCode.UNAUTHORIZED: { throw new Error('L\'utilisateur n\'est pas connecté'); }
      case HttpCode.FORBIDDEN: { throw new Error('L\'utilisateur n\'a pas les droits'); }
      case HttpCode.NOT_FOUND: { throw new Error('La ressource n\'existe pas'); }
      case HttpCode.ERROR: { throw new Error('Une erreur sur le serveur est survenue'); }
      // eslint-disable-next-line no-empty
      default: { }
    }
  }
}
