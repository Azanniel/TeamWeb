import Collaborator from '../models/Collaborator'

export default {
  render (collaborator: Collaborator) {
    return {
      id: collaborator.id,
      name: collaborator.name,
      cpf: collaborator.cpf,
      department: collaborator.department,
      position: collaborator.position
    }
  },

  renderMany (collaborators: Collaborator[]) {
    return collaborators.map(collaborator => this.render(collaborator))
  }
}
