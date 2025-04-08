import React, { useState } from 'react';
import NavigationMenu from '../components/NavigationMenu'; // Importando o menu de navegação
import { validateCPF, formatCPF } from '../utils/cpfUtils'; // Importando funções auxiliares
import Swal from 'sweetalert2';

const Participar: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1); // Estado para controlar o passo atual
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    cpf: '',
    email: '',
    dataNascimento: '',
    endereco: {
      rua: '',
      numero: '',
      bairro: '',
      cidade: '',
      estado: '',
      cep: '',
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === 'cep' && value.length === 9) {
      fetch(`https://viacep.com.br/ws/${value.replace('-', '')}/json/`)
        .then((response) => response.json())
        .then((data) => {
          if (!data.erro) {
            setFormData((prev) => ({
              ...prev,
              endereco: {
                ...prev.endereco,
                rua: data.logradouro || '',
                bairro: data.bairro || '',
                cidade: data.localidade || '',
                estado: data.uf || '',
                cep: value,
              },
            }));
          } else {
            alert('CEP inválido. Por favor, verifique e tente novamente.');
          }
        })
        .catch(() => alert('Erro ao buscar informações do CEP.'));
    }

    if (name in formData.endereco) {
      setFormData((prev) => ({
        ...prev,
        endereco: { ...prev.endereco, [name]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateStep = () => {
    if (currentStep === 1) {
      const { nomeCompleto, cpf, email, dataNascimento } = formData;
      if (!nomeCompleto || !cpf || !email || !dataNascimento) {
        Swal.fire({
          icon: 'warning',
          title: 'Campos obrigatórios',
          text: 'Por favor, preencha todos os campos obrigatórios.',
          confirmButtonColor: '#fbbf24',
        });
        return false;
      }
      if (!validateCPF(cpf)) {
        Swal.fire({
          icon: 'error',
          title: 'CPF inválido',
          text: 'Por favor, insira um CPF válido.',
          confirmButtonColor: '#d33',
        });
        return false;
      }
    } else if (currentStep === 2) {
      const { rua, numero, bairro, cidade, estado, cep } = formData.endereco;
      if (!rua || !numero || !bairro || !cidade || !estado || !cep) {
        Swal.fire({
          icon: 'warning',
          title: 'Campos obrigatórios',
          text: 'Por favor, preencha todos os campos de endereço.',
          confirmButtonColor: '#fbbf24',
        });
        return false;
      }
      if (!/^\d{5}-\d{3}$/.test(cep)) {
        Swal.fire({
          icon: 'error',
          title: 'CEP inválido',
          text: 'Use o formato 00000-000.',
          confirmButtonColor: '#d33',
        });
        return false;
      }
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep()) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep()) {
      console.log('Dados enviados:', formData);
      alert('Cadastro realizado com sucesso!');
    }
  };

  const applyMask = (value: string, mask: string) => {
    let i = 0;
    const v = value.replace(/\D/g, '');
    return mask.replace(/#/g, () => v[i++] || '');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-300">
      {/* Menu de navegação */}
      <NavigationMenu isScrolled={true} menuOpen={false} setMenuOpen={() => {}} />

      {/* Formulário com etapas */}
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Formulário de Cadastro
        </h1>

        {/* Stepper Navigation */}
        <div className="flex justify-center mb-8">
          {[1, 2, 3].map((step) => (
            <div
              key={step}
              className={`flex items-center ${
                step < currentStep ? 'text-blue-700' : step === currentStep ? 'text-blue-500' : 'text-gray-400'
              }`}
            >
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full border-2 ${
                  step <= currentStep ? 'border-blue-700 bg-blue-100' : 'border-gray-300'
                }`}
              >
                {step}
              </div>
              {step !== 3 && <div className="w-10 h-1 bg-gray-300 mx-2"></div>}
            </div>
          ))}
        </div>

        {/* Conteúdo do formulário */}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
          {currentStep === 1 && (
            <div>
              <h2 className="text-xl font-bold mb-4">Informações Pessoais</h2>
              <div className="mb-4">
                <label htmlFor="nomeCompleto" className="block text-sm font-medium text-gray-700">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="nomeCompleto"
                  name="nomeCompleto"
                  value={formData.nomeCompleto}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="cpf" className="block text-sm font-medium text-gray-700">
                  CPF
                </label>
                <input
                  type="text"
                  id="cpf"
                  name="cpf"
                  value={formatCPF(formData.cpf)} // Formata o CPF para exibição
                  onChange={(e) => {
                    const rawValue = e.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
                    setFormData({ ...formData, cpf: rawValue }); // Atualiza o estado com o valor limpo
                  }}
                  required
                  maxLength={14}
                  placeholder="000.000.000-00"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="dataNascimento" className="block text-sm font-medium text-gray-700">
                  Data de Nascimento
                </label>
                <input
                  type="date"
                  id="dataNascimento"
                  name="dataNascimento"
                  value={formData.dataNascimento}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <h2 className="text-xl font-bold mb-4">Endereço</h2>
              <div className="mb-4">
                <label htmlFor="cep" className="block text-sm font-medium text-gray-700">
                  CEP
                </label>
                <input
                  type="text"
                  id="cep"
                  name="cep"
                  value={formData.endereco.cep} // Exibe o valor do estado
                  onChange={(e) => {
                    const rawValue = e.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
                    setFormData((prev) => ({
                      ...prev,
                      endereco: { ...prev.endereco, cep: rawValue }, // Atualiza o estado com o valor limpo
                    }));
                  }}
                  onBlur={(e) => {
                    const cep = e.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
                    if (cep.length === 8) {
                      fetch(`https://viacep.com.br/ws/${cep}/json/`)
                        .then((response) => response.json())
                        .then((data) => {
                          if (!data.erro) {
                            setFormData((prev) => ({
                              ...prev,
                              endereco: {
                                ...prev.endereco,
                                rua: data.logradouro || '',
                                bairro: data.bairro || '',
                                cidade: data.localidade || '',
                                estado: data.uf || '',
                                cep: applyMask(cep, '#####-###'), // Aplica a máscara ao CEP
                              },
                            }));
                          } else {
                            Swal.fire({
                              icon: 'error',
                              title: 'CEP inválido',
                              text: 'Por favor, verifique e tente novamente.',
                              confirmButtonColor: '#d33',
                            });
                          }
                        })
                        .catch(() =>
                          Swal.fire({
                            icon: 'error',
                            title: 'Erro',
                            text: 'Erro ao buscar informações do CEP.',
                            confirmButtonColor: '#d33',
                          })
                        );
                    }
                  }}
                  required
                  maxLength={9}
                  placeholder="00000-000"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="rua" className="block text-sm font-medium text-gray-700">
                  Rua
                </label>
                <input
                  type="text"
                  id="rua"
                  name="rua"
                  value={formData.endereco.rua}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="numero" className="block text-sm font-medium text-gray-700">
                  Número
                </label>
                <input
                  type="text"
                  id="numero"
                  name="numero"
                  value={formData.endereco.numero}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="bairro" className="block text-sm font-medium text-gray-700">
                  Bairro
                </label>
                <input
                  type="text"
                  id="bairro"
                  name="bairro"
                  value={formData.endereco.bairro}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="cidade" className="block text-sm font-medium text-gray-700">
                  Cidade
                </label>
                <input
                  type="text"
                  id="cidade"
                  name="cidade"
                  value={formData.endereco.cidade}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="estado" className="block text-sm font-medium text-gray-700">
                  Estado
                </label>
                <input
                  type="text"
                  id="estado"
                  name="estado"
                  value={formData.endereco.estado}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <h2 className="text-xl font-bold mb-4">Revisão e Envio</h2>
              <p className="mb-4">Revise as informações antes de enviar:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Nome Completo:</strong> {formData.nomeCompleto}
                </li>
                <li>
                  <strong>CPF:</strong> {formData.cpf}
                </li>
                <li>
                  <strong>Email:</strong> {formData.email}
                </li>
                <li>
                  <strong>Data de Nascimento:</strong> {formData.dataNascimento}
                </li>
                <li>
                  <strong>Endereço:</strong> {`${formData.endereco.rua}, ${formData.endereco.numero}, ${formData.endereco.bairro}, ${formData.endereco.cidade} - ${formData.endereco.estado}, CEP: ${formData.endereco.cep}`}
                </li>
              </ul>
            </div>
          )}

          {/* Botões de navegação */}
          <div className="flex justify-between mt-6">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={handlePrev}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
              >
                Anterior
              </button>
            )}
            {currentStep < 3 ? (
              <button
                type="button"
                onClick={handleNext} // Apenas avança para a próxima etapa
                className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Próximo
              </button>
            ) : (
              <button
                type="submit" // Submete o formulário apenas na última etapa
                className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-600"
              >
                Enviar
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Participar;