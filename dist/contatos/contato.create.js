import { Contato } from "./contato.model.js";
import { ContatoRepositoryLocalStorage } from "./contato.repository.local-storage.js";
class ContatoPaginaCadastro {
    constructor(repositorioContatos) {
        this.repositorioContatos = repositorioContatos;
        this.configurarElementos();
    }
    configurarElementos() {
        this.txtNome = document.getElementById("txtNome");
        this.txtEmail = document.getElementById("txtEmail");
        this.txtTelefone = document.getElementById("txtTelefone");
        this.txtEmpresa = document.getElementById("txtEmpresa");
        this.txtCargo = document.getElementById("txtCargo");
        this.btnSalvarContato = document.getElementById("btnSalvarContato");
        // operador discard _
        this.btnSalvarContato.addEventListener("click", (_evt) => this.gravarRegistros());
    }
    gravarRegistros() {
        const novoContato = new Contato(this.txtNome.value, this.txtEmail.value, this.txtTelefone.value, this.txtEmpresa.value, this.txtCargo.value);
        this.repositorioContatos.inserir(novoContato);
        // método para redirecionar usuario
        window.location.href = "contato.list.html";
    }
}
new ContatoPaginaCadastro(new ContatoRepositoryLocalStorage());
