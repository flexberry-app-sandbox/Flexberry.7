package 7.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import 7.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Регистр
 */
@Entity(name = "IIS7Регистр")
@Table(schema = "public", name = "Регистр")
public class Registr {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КодРегистра")
    private Integer кодрегистра;

    @Column(name = "Периодичность")
    private String периодичность;

    @Column(name = "Наименование")
    private String наименование;


    public Registr() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКодРегистра() {
      return кодрегистра;
    }

    public void setКодРегистра(Integer кодрегистра) {
      this.кодрегистра = кодрегистра;
    }

    public String getПериодичность() {
      return периодичность;
    }

    public void setПериодичность(String периодичность) {
      this.периодичность = периодичность;
    }

    public String getНаименование() {
      return наименование;
    }

    public void setНаименование(String наименование) {
      this.наименование = наименование;
    }


}