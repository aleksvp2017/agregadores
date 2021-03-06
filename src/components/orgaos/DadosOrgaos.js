//select '{codigo: ''' || orgao || ''', descricao: ''' || orgao || ' - ' || descricao || '''},'
//from orgao where exercicio = 2019 and snativo and tipoorgao = 'O'

export function obterTodosOrgaos(){
    return [
        {codigo: '01000', descricao: '01000 - Camara dos Deputados'},
        {codigo: '02000', descricao: '02000 - Senado Federal'},
        {codigo: '03000', descricao: '03000 - Tribunal de Contas da União'},
        {codigo: '10000', descricao: '10000 - Supremo Tribunal Federal'},
        {codigo: '11000', descricao: '11000 - Superior Tribunal de Justiça'},
        {codigo: '12000', descricao: '12000 - Justiça Federal'},
        {codigo: '13000', descricao: '13000 - Justiça Militar da União'},
        {codigo: '14000', descricao: '14000 - Justiça Eleitoral'},
        {codigo: '15000', descricao: '15000 - Justiça do Trabalho'},
        {codigo: '16000', descricao: '16000 - Justiça do Distrito Federal e dos Territórios'},
        {codigo: '17000', descricao: '17000 - Conselho Nacional de Justiça'},
        {codigo: '20000', descricao: '20000 - Presidência da República'},
        {codigo: '22000', descricao: '22000 - Ministério da Agricultura, Pecuária e Abastecimento'},
        {codigo: '24000', descricao: '24000 - Ministério da Ciência, Tecnologia, Inovações e Comunicações'},
        {codigo: '25000', descricao: '25000 - Ministério da Economia'},
        {codigo: '26000', descricao: '26000 - Ministério da Educação'},
        {codigo: '28000', descricao: '28000 - Ministério da Indústria, Comércio Exterior e Serviços'},
        {codigo: '29000', descricao: '29000 - Defensoria Pública da União'},
        {codigo: '30000', descricao: '30000 - Ministério da Justiça e Segurança Pública'},
        {codigo: '32000', descricao: '32000 - Ministério de Minas e Energia'},
        {codigo: '34000', descricao: '34000 - Ministério Público da União'},
        {codigo: '35000', descricao: '35000 - Ministério das Relações Exteriores'},
        {codigo: '36000', descricao: '36000 - Ministério da Saúde'},
        {codigo: '37000', descricao: '37000 - Controladoria-Geral da União'},
        {codigo: '39000', descricao: '39000 - Ministério da Infraestrutura'},
        {codigo: '40000', descricao: '40000 - Ministério do Trabalho'},
        {codigo: '42000', descricao: '42000 - Ministério da Cultura'},
        {codigo: '44000', descricao: '44000 - Ministério do Meio Ambiente'},
        {codigo: '47000', descricao: '47000 - Ministério do Planejamento, Desenvolvimento e Gestão'},
        {codigo: '51000', descricao: '51000 - Ministério do Esporte'},
        {codigo: '52000', descricao: '52000 - Ministério da Defesa'},
        {codigo: '53000', descricao: '53000 - Ministério do Desenvolvimento Regional'},
        {codigo: '54000', descricao: '54000 - Ministério do Turismo'},
        {codigo: '55000', descricao: '55000 - Ministério da Cidadania'},
        {codigo: '56000', descricao: '56000 - Ministério das Cidades'},
        {codigo: '59000', descricao: '59000 - Conselho Nacional do Ministério Público'},
        {codigo: '60000', descricao: '60000 - Gabinete da Vice-Presidência da República'},
        {codigo: '63000', descricao: '63000 - Advocacia-Geral da União'},
        {codigo: '71000', descricao: '71000 - Encargos Financeiros da União'},
        {codigo: '71101', descricao: '71101 - Recursos sob Supervisão do Ministério da Economia'},
        {codigo: '71102', descricao: '71102 - Recursos sob Supervisão do Ministério do Planejamento, Desenvolvimento e Gestão'},
        {codigo: '71103', descricao: '71103 - Encargos Financeiros da União - Pagamento de Sentenças Judiciais'},
        {codigo: '71104', descricao: '71104 - Remuneração de Agentes Financeiros - Recursos sob Supervisão do Ministério da Economia'},
        {codigo: '71105', descricao: '71105 - Recursos sob Supervisão da Secretaria Especial da Receita Federal do Brasil'},
        {codigo: '71106', descricao: '71106 - Inativos e Pensionistas da Administração Direta do Poder Executivo-Recursos sob Supervisão do M. da Economia'},
        {codigo: '71118', descricao: '71118 - Recursos sob Supervisão do Ministério de Minas e Energia'},
        {codigo: '71901', descricao: '71901 - Fundo Contingente da Extinta RFFSA - Recursos sob Supervisão do Ministério da Economia'},
        {codigo: '71903', descricao: '71903 - Fundo Social - FS'},
        {codigo: '71904', descricao: '71904 - Fundo de Estabilidade do Seguro Rural - Recursos sob Supervisão do Ministério da Economia'},
        {codigo: '71905', descricao: '71905 - Fundo de Garantia à Exportação - Recursos sob Supervisão do Ministério da Economia'},
        {codigo: '73000', descricao: '73000 - Transferências a Estados, Distrito Federal e Municípios'},
        {codigo: '73101', descricao: '73101 - Recursos sob Supervisão do Ministério da Economia'},
        {codigo: '73104', descricao: '73104 - Recursos sob Supervisão do Ministério de Minas e Energia'},
        {codigo: '73107', descricao: '73107 - Recursos sob Supervisão do Ministério da Educação'},
        {codigo: '73108', descricao: '73108 - Transferências Constitucionais - Recursos sob Supervisão do Ministério da Economia'},
        {codigo: '73109', descricao: '73109 - Recursos sob Supervisão do Ministério do Esporte'},
        {codigo: '73111', descricao: '73111 - Recursos sob Supervisão do Ministério do Meio Ambiente'},
        {codigo: '73113', descricao: '73113 - Recursos sob Supervisão do Ministério do Planejamento, Desenvolvimento e Gestão'},
        {codigo: '73901', descricao: '73901 - Fundo Constitucional do Distrito Federal - FCDF'},
        {codigo: '74000', descricao: '74000 - Operações Oficiais de Crédito'},
        {codigo: '74101', descricao: '74101 - Recursos sob Supervisão da Secretaria do Tesouro Nacional - Ministério da Economia'},
        {codigo: '74102', descricao: '74102 - Recursos sob Supervisão do Ministério da Economia'},
        {codigo: '74201', descricao: '74201 - Recursos sob Supervisão da Superintendência de Seguros Privados/SUSEP - Ministério da Economia'},
        {codigo: '74202', descricao: '74202 - Recursos sob Supervisão da Agência Nacional de Saúde Suplementar/ANS - Ministério da Saúde'},
        {codigo: '74203', descricao: '74203 - Recursos sob Supervisão do Instituto Nacional de Colonização e Reforma Agrária/INCRA-MAPA'},
        {codigo: '74204', descricao: '74204 - Recursos sob Supervisão da Caixa de Construções de Casas para o Pessoal da Marinha - CCCPM'},
        {codigo: '74205', descricao: '74205 - Recursos sob Supervisão da Caixa de Financiamento Imobiliário da Aeronáutica'},
        {codigo: '74901', descricao: '74901 - Recursos sob Supervisão do Fundo de Defesa da Economia Cafeeira/Funcafé - MAPA'},
        {codigo: '74902', descricao: '74902 - Recursos sob Supervisão do Fundo de Financiamento ao Estudante do Ensino Superior/FIES - Min. da Educação'},
        {codigo: '74904', descricao: '74904 - Recursos sob Supervisão do Fundo da Marinha Mercante/FMM - Ministério da Infraestrutura'},
        {codigo: '74905', descricao: '74905 - Recursos sob Sup. do Fundo p/ Desenv.Tecnol. das Telecomunic./FUNTTEL-M.Ciência,Tecnol.,Inov. e Comunicações'},
        {codigo: '74906', descricao: '74906 - Recursos sob Supervisão do Fundo de Terras e da Reforma Agrária/Banco da Terra - MAPA'},
        {codigo: '74908', descricao: '74908 - Recursos sob Supervisão do Fundo Geral de Turismo/FUNGETUR - Ministério do Turismo'},
        {codigo: '74910', descricao: '74910 - Recursos sob Sup. do Fundo Nac.de Desenv.Científico e Tecnológico/FNDCT-M.Ciência,Tecnol.,Inov. e Comunicações'},
        {codigo: '74912', descricao: '74912 - Recursos sob Supervisão do Fundo Nacional de Cultura'},
        {codigo: '74913', descricao: '74913 - Recursos sob Supervisão do Fundo Constitucional de Financiamento do Norte/FNO - M. Desenvolv. Regional'},
        {codigo: '74914', descricao: '74914 - Recursos sob Supervisão do Fundo Constitucional de Financiamento do Centro-Oeste/FCO - M. Desenvolv. Regional'},
        {codigo: '74915', descricao: '74915 - Recursos sob Supervisão do Fundo Constitucional de Financiamento do Nordeste/FNE - M. Desenvolv. Regional'},
        {codigo: '74916', descricao: '74916 - Recursos sob Supervisão do Fundo Nacional sobre Mudança do Clima/FNMC - Ministério do Meio Ambiente'},
        {codigo: '74917', descricao: '74917 - Recursos sob Supervisão do Fundo de Desenvolvimento da Amazônia/FDA - M. Desenvolv. Regional'},
        {codigo: '74918', descricao: '74918 - Recursos sob Supervisão do Fundo de Desenvolvimento do Nordeste/FDNE - M. Desenvolv. Regional'},
        {codigo: '74919', descricao: '74919 - Recursos sob Supervisão do Fundo de Desenvolvimento do Centro-Oeste/FDCO - M. Desenvolv. Regional'},
        {codigo: '75000', descricao: '75000 - Dívida Pública Federal'},
        {codigo: '81000', descricao: '81000 - Ministério da Mulher, da Família e dos Direitos Humanos'},
        {codigo: '82000', descricao: '82000 - Ministério da Segurança Pública'},
        {codigo: '90000', descricao: '90000 - Reserva de Contingência'},
        {codigo: '92000', descricao: '92000 - Atividades Padronizadas'},
        {codigo: '93000', descricao: '93000 - Programações Condicionadas à Aprovação Legislativa prevista no inciso III do art. 167 da Constituição'},
        {codigo: '98000', descricao: '98000 - Receita do Tesouro da União'},
        {codigo: '99000', descricao: '99000 - Órgão Genérico Geratriz'},
        {codigo: '99998', descricao: '99998 - DEST'},
        {codigo: '99999', descricao: '99999 - SOF'},        
    ]}


 export function obterOpcoesOrgaos(){
        let opcoes = [];
        opcoes.push({value: null, text: "Selecione um órgão"});
        obterTodosOrgaos().forEach(agregador => opcoes.push({value: agregador.codigo, text: agregador.descricao}));
        return opcoes;
}    