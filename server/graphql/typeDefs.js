import { gql } from "apollo-server";

export let typeDefs = gql`
  type Message {
    text: String
    createdAt: String
    createdBy: String
  }

  type User {
    nama: String
    nik: String
    password: String
    token: String
    role_id: String
    role_access: String
    val_date: String
    branch_name: String
    departemen: String
  }

  type HakAkses {
    kode: String
    nama: String
    status: String
  }

  type MataUang {
    mata: String
    nama: String
    beli: String
    jual: String
    tengah: String
    simbol: String
    tanggal: String
    status: String
  }

  type MenuList {
    menu_id: String
    nama: String
    path_menu: String
    hasChild: String
    child: [FirstChild]
  }

  type FirstChild {
    menu_id: String
    nama: String
    path_menu: String
    hasChild: String
    child: [SecondChild]
  }

  type SecondChild {
    menu_id: String
    nama: String
    path_menu: String
    hasChild: String
  }

  type NavList {
    menu_id: String
    nama: String
  }

  input MessageInput {
    text: String
    username: String
  }

  input RegisterInput {
    nama: String
    nik: String
    password: String
    role_id: String
    role_access: String
    branch_name: String
    departemen: String
  }

  input LoginInput {
    nik: String
    password: String
  }

  input SessionInput {
    nik: String
  }

  input AddHakAksesInput {
    kode: String!
    nama: String!
    status: String!
  }

  input EditHakAksesInput {
    kode: String
    nama: String
    status: String
  }

  input AddMataUangInput {
    mata: String
    nama: String
    beli: String
    jual: String
    tengah: String
    simbol: String
    tanggal: String
    status: String
  }

  input EditMataUangInput {
    mata: String
    nama: String
    beli: String
    jual: String
    tengah: String
    simbol: String
    tanggal: String
    status: String
  }

  type Query { 
    message(id: ID!): Message
    user(id: ID!): User
    getUser: [User]
    getHakAksesByKode(id: ID!): HakAkses
    getHakAkses: [HakAkses]
    mataUang(id: ID!): MataUang
    getMataUang: [MataUang]
    getMenuList: [MenuList]
    getNavList: [NavList]
  }

  type Mutation {
    createMessage(messageInput: MessageInput): Message!
    registerUser(registerInput: RegisterInput): User!
    loginUser(loginInput: LoginInput): User
    logoutUser: Boolean
    getSessionUser(sessionInput: SessionInput): User
    addHakAksesByKode(addHakAksesInput: AddHakAksesInput): HakAkses
    editHakAksesByKode(editHakAksesInput: EditHakAksesInput): Boolean
    addMataUang(addMataUangInput: AddMataUangInput): MataUang
    editMataUang(editMataUangInput: EditMataUangInput): Boolean
  }
`;
