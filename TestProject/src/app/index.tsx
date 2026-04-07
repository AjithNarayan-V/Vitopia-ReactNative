import ButtonComponent from "@/components/ButtonComponents/ButtonComponent";
import { Button, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ActivityIndicator from "../../components/activityIndicator";
import Modal from "../../components/model";
import Pressable from "../../components/Pressable";
import ShowAlert from "../../components/ShowAlert";
export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
    <ScrollView style={{ flex: 1, backgroundColor: '#fff', padding: 20, paddingBottom: 100 }}>
      <View
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <Text>Edit app/index.tsx to edit this screen.</Text>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Center Me</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text>A</Text>
          <Text>B</Text>
        </View>
        <View style={{
          padding: 20,
          backgroundColor: 'rgba(5, 5, 85, 0.93)',
          borderRadius: 10
        }}>
          <Text>Card Title</Text>
        </View>
      </View>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eaque debitis voluptas iusto culpa dignissimos perspiciatis. Culpa magnam illo iste sapiente assumenda? Odio illo quidem provident. Sequi dolores ratione debitis tempora omnis reiciendis quos, magni aspernatur praesentium fugiat pariatur dolorem recusandae at voluptate. Tempore, hic? Hic, assumenda molestias. Nostrum dignissimos dolore quod laboriosam eius corporis iure fugit eligendi autem, quis, esse dolor qui distinctio earum incidunt asperiores ullam vitae totam nobis itaque? Esse eaque quo laudantium minima accusamus provident placeat in quam omnis maxime ducimus sapiente rerum corrupti, atque consectetur qui nulla, velit fuga libero voluptatum! Delectus, maxime porro quam veniam deleniti quod laborum blanditiis dolor minus provident nam rerum quaerat, iusto odit ut esse facere? Doloribus at itaque esse obcaecati accusamus rem facere? Ullam repudiandae, iure maxime vel officia placeat aut voluptate magni! Assumenda molestias ab recusandae autem odio officiis quaerat saepe vero atque eius fugiat delectus adipisci tenetur dignissimos accusamus aspernatur dolorum ea repellendus deleniti totam harum, distinctio hic. Ad, id. Adipisci sint soluta quo odit, nostrum libero harum fuga voluptatum dicta optio eos, sed, doloribus illo! Aliquid cupiditate incidunt voluptatum neque cumque. Vitae error cumque eius odit autem nihil ducimus modi iusto sed, atque dignissimos rem quia cupiditate accusamus similique ea molestias aperiam voluptatum maiores fugiat! Dolorum velit aspernatur nemo blanditiis eveniet iusto dolor dignissimos, quae eos iure ipsum asperiores voluptatum est, quasi perferendis maxime expedita fugiat totam nostrum? Obcaecati hic, ut repellendus minus quasi voluptas! Dolor, accusamus. Cupiditate sapiente minus eligendi explicabo, alias eaque tempore totam deserunt voluptates, culpa odio dolores labore similique. Unde deserunt architecto asperiores, fugit eligendi quisquam ducimus voluptatem at libero, consectetur labore voluptatibus placeat omnis. Dolorum cupiditate cum porro vel eum reiciendis facere voluptatibus tempore recusandae dignissimos molestias corrupti aspernatur quas sed autem suscipit molestiae, delectus assumenda laudantium, nihil possimus? Quibusdam, repudiandae veritatis assumenda aperiam fugit nihil recusandae maiores eligendi neque aut enim ducimus aliquam sequi tempora facilis, veniam incidunt libero natus sunt rerum nostrum, iste explicabo nam. Cupiditate blanditiis optio ipsa minima quisquam? Autem temporibus eius, molestias reprehenderit eaque, earum animi, fugit nostrum vero ex harum veritatis at necessitatibus quibusdam architecto consequatur magnam est fugiat possimus nesciunt. Eius debitis nam suscipit, quam illo nobis quidem, explicabo dolores quo maiores qui cupiditate, pariatur eaque quibusdam reiciendis repudiandae! Aliquam, ea vero, ratione nobis excepturi recusandae quis atque dolor voluptatem nostrum assumenda incidunt quasi quia. Amet quasi velit odit laudantium similique quos commodi nam architecto laboriosam tenetur consequuntur assumenda ipsa minus facilis consequatur, fuga fugiat eaque non obcaecati maiores aperiam! Iure expedita ipsam veniam ex sunt reprehenderit libero doloremque quasi quibusdam, enim repudiandae aspernatur, distinctio sint illum dolor qui natus ea ipsum iste nam fugit itaque. Iusto, repellat, deleniti nam quaerat nostrum, mollitia in impedit veniam voluptates totam sit animi dicta recusandae ab consequuntur ea consequatur delectus eos magni soluta ipsa adipisci. Maxime ratione doloribus ipsam aliquid voluptate sapiente dolorum aut soluta, voluptas similique, nisi expedita perferendis enim fuga natus aperiam. Nihil autem, quo, repellendus corrupti, quis alias ipsum quibusdam perferendis maxime necessitatibus ratione! </Text>

      <View style={{ padding: 20, gap: 10, paddingBottom: 50 }}>
        <Button title="click me" onPress={() => { console.log("clicked") }} color={"blue"} />
        <Pressable />
        <Modal />
        <ActivityIndicator />
        <ShowAlert />
        <View style={styles.buttonContainer}>
          <Button
            title="platform specific button"
            color={Platform.OS === "android" ? "#ffffff" : "#0a6f53"}
            onPress={() => console.log("platform button clicked")}
          />
        </View>
        <TouchableOpacity
          style={styles.customButton}
          onPress={() => console.log("custom button clicked")}
          activeOpacity={0.8}
        >
          <Text style={styles.customButtonText}>Custom Styled Button</Text>
        </TouchableOpacity>
        <ButtonComponent />
      </View>

    </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: Platform.OS === "android" ? "#0a6f53" : "#dcefe9",
    borderRadius: 10,
    padding: 8,
  },
  customButton: {
    backgroundColor: "#f97316",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  customButtonText: {
    color: "#ffffff",
    fontWeight: "700",
    fontSize: 16,
  },
});



