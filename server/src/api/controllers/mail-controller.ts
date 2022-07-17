/** Blueprint For Justice
 ** Copyright (C) 2022 Anish Sinha
 **
 ** This program is free software: you can redistribute it and/or modify
 ** it under the terms of the GNU General Public License as published by
 ** the Free Software Foundation, either version 3 of the License, or
 ** (at your option) any later version.
 **
 ** This program is distributed in the hope that it will be useful,
 ** but WITHOUT ANY WARRANTY; without even the implied warranty of
 ** MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 ** GNU General Public License for more details.
 **
 ** You should have received a copy of the GNU General Public License
 ** along with this program.  If not, see http://www.gnu.org/licenses/.
 **/

import { RequestHandler } from "express";

require("dotenv").config();

const SibApiV3Sdk = require("sib-api-v3-typescript");

const emailRegex =
  /([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)*|\[((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|IPv6:((((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){6}|::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){5}|[0-9A-Fa-f]{0,4}::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){4}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):)?(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){3}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,2}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){2}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,3}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,4}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,5}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,6}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)|(?!IPv6:)[0-9A-Za-z-]*[0-9A-Za-z]:[!-Z^-~]+)])/;

export const addUserToMailingList: RequestHandler = async (req, res) => {
  const { email } = req.body;
  if (!emailRegex.exec(email)) return res.status(400).json("invalid email");
  const apiInstance = new SibApiV3Sdk.ContactsApi();
  const apiKey = apiInstance.authentications["apiKey"];
  apiKey.apiKey = process.env.SENDINBLUE_API_KEY;
  let createContact = new SibApiV3Sdk.CreateContact();
  createContact.email = email;
  createContact.listIds = [2];
  try {
    await apiInstance.createContact(createContact);
    return res.status(200).json("email added successfully");
  } catch (e: any) {
    return res.status(500).json("something went wrong");
  }
};

export const sendContactForm: RequestHandler = async (req, res) => {
  const { firstName, lastName, subject, content, email } = req.body;
  if (
    !firstName ||
    !lastName ||
    !subject ||
    !content ||
    !emailRegex.exec(email)
  )
    return res.status(400).json("invalid request");
  const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
  const apiKey = apiInstance.authentications["apiKey"];
  apiKey.apiKey = process.env.SENDINBLUE_API_KEY;
  const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

  sendSmtpEmail.subject = "{{params.subject}}";
  sendSmtpEmail.htmlContent = `<html><body><p>${content}</p> </body></html>`;
  sendSmtpEmail.sender = { name: `${firstName} ${lastName}`, email: email };
  sendSmtpEmail.to = [{ email: "adapoole34@gmail.com", name: "Ada Poole" }];
  sendSmtpEmail.params = {
    FNAME: firstName,
    LNAME: lastName,
    subject: subject,
  };

  try {
    await apiInstance.sendTransacEmail(sendSmtpEmail);
    return res.status(200).json("successfully sent email");
  } catch (e: any) {
    return res.status(500).json("something went wrong");
  }
};
