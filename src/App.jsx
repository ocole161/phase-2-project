import { useState, useEffect } from "react"
import { Switch, Route, BrowserRouter, useHistory } from "react-router-dom"
import Home from "./components/Home"
import Header from "./components/Header"
import SubmitForm from "./components/SubmitForm"
import EditForm from "./components/EditForm"
import SpecialDetail from "./components/SpecialDetail"
import './App.css'
import HeaderNoSubmit from "./components/HeaderNoSubmit"
import AdminPage from "./components/AdminPage"
import HeaderAdmin from "./components/HeaderAdmin"
import AdminAuth from "./components/AdminAuth"

function App() {
  const history = useHistory()
  const [specials, setSpecials] = useState([])
  const [hood, setHood] = useState("Home")
  const [search, setSearch] = useState("")
  const [adminPage, setAdminPage] = useState(
    <>
      <HeaderAdmin handleHomeClick={handleHomeClick}/>
      <AdminAuth handlePassword={handlePassword}/>
    </>
  )

  useEffect(() => {
      fetch("http://localhost:3000/specials")
      .then(res => res.json())
      .then(data => {
          setSpecials(data)
      })
  }, [])

  function handleClick(e) {
    setHood(e.target.value)
}
  function handleHomeClick(e) {
    setHood(e.target.value)
  }

  function onDeleteSpecial(deletedSpecial) {
    const updatedSpecials = specials.filter((special) =>
    special.id !== deletedSpecial.id)
    setSpecials(updatedSpecials)
    history.push(`/`)
    window.alert("This special has been deleted.")
  }

  function addNewSpecial(newSpecial) {
    fetch("http://localhost:3000/specials", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newSpecial)
    })
    setSpecials([...specials, newSpecial])
    history.push(`/`)
    window.alert("Thank you for submitting a new happy hour special!")
  }

  function updateSpecial(updatedSpecial) {
    const updatedSpecials = specials.map((special) => {
      if (special.id === updatedSpecial.id) {
        return updatedSpecial }
      else {
        return special }
    })
    setSpecials(updatedSpecials)
  }

  function handlePassword(e) {
    e.preventDefault()
    if (e.target["password"].value === "admin") {
      setAdminPage(
        <>
          <HeaderAdmin handleHomeClick={handleHomeClick}/>
          <AdminPage specials={specials}/>
        </>
      )
    } else {window.alert("That is not the correct password")}
}

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  const specialsToShow = specials.filter(special => {
    return (hood === "Home" || special.locationNeighborhood === hood)
  }).sort((special1, special2) => {
    return special1.locationName.localeCompare(special2.locationName)
  }).filter(special => {
    return (special.locationName.toLowerCase().includes(search.toLowerCase()))
  })

  return (
    <div>
        <Switch>
          <Route path="/specials/:id/edit">
            <Header handleHomeClick={handleHomeClick}/>
            <EditForm onUpdateSpecial={updateSpecial}/>
          </Route>
          <Route path="/specials/submit">
            <HeaderNoSubmit handleHomeClick={handleHomeClick} />
            <SubmitForm addNewSpecial={addNewSpecial}/>
          </Route>
          <Route path="/specials/:id">
            <Header handleHomeClick={handleHomeClick}/>
            <SpecialDetail onDeleteSpecial={onDeleteSpecial}/>
          </Route>
          <Route path="/admin">
            {adminPage}
          </Route>
          <Route exact path="/">
            <Header handleHomeClick={handleHomeClick}/>
            <Home specials={specialsToShow} handleClick={handleClick} handleSearch={handleSearch}/>
          </Route>
        </Switch>
    </div>
  )
}

export default App