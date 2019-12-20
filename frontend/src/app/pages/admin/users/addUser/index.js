/**
 * Ajout
 *
 * Component by the route /addUsers and contain all the functionnality to add a new Course / event
 */

import React, { useState } from "react";

import { Container, FormGroup, FormInput, Button, NavLink } from "shards-react";
import { navigate } from 'hookrouter';
import style from "./addUser.module.css";
import RadBut from '../../../../components/addUser_components/RadioButton'
import CheckBox from '../../../../components/addUser_components/CheckBox'
import { FaArrowRight } from "react-icons/fa";

export default function Ajout() {
    return (
        <Container className={style.Box}>
            <h2 style={{ textAlign: "center" }}>Ajout d'un utilisateur</h2>

            <div className={style.SousBox}>
                <FormGroup className={style.FormGroup}>
                    <label htmlFor="#id" className={style.LabelText}>Identifiant</label>
                    <FormInput id="#id" className={style.FormInp} />
                </FormGroup>

                <FormGroup className={style.FormGroup}>
                    <label htmlFor="#lastname" className={style.LabelText}>Nom</label>
                    <FormInput id="#lastname" className={style.FormInp} />
                </FormGroup>

                <FormGroup className={style.FormGroup}>
                    <label htmlFor="#firstname" className={style.LabelText}>Prénom</label>
                    <FormInput id="#firstname" className={style.FormInp} />
                </FormGroup>

                <FormGroup className={style.FormGroup2}>
                    <label htmlFor="#roles" className={style.LabelText}>Rôles</label>

                    <div className={style.Form}>
                        <RadBut id="enseignant" name="rd" value="Enseignant"/>
                        <RadBut id="tuteur" name="rd" value="Tuteur"/>
                        <CheckBox id="admin" value="Administrateur"/>
                    </div>
                </FormGroup>

                <NavLink onClick={() => navigate("/administration/utilisateurs/ajout/etape2")}>
                    <Button type="success" className={style.Btn}>Suivant <FaArrowRight /></Button>
                </NavLink>
            </div>

        </Container>
    );
}